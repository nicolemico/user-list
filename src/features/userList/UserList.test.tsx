import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../utils';
import { UserList } from './UserList';
import { MySwal } from '../../utils';
import { setupStore } from 'app/store';
import { fetchUserList } from './userListSlice';

test('should display the skeleton then the user cards', async () => {
  renderWithProviders(<UserList />);

  // should display 12 skeleton items while data is loading
  expect(screen.getAllByTestId('skeleton')).toHaveLength(12);

  // should display the user cards
  const userCards = await screen.findAllByTestId('user-card');
  expect(userCards.length).not.toBe(0);

  // should not display `No data to display.`
  expect(screen.queryByText('No data to display.')).not.toBeInTheDocument();

  // should not show sweetalert for failed user list fetch
  expect(MySwal.isVisible()).toBeFalsy();
});

test('should display correct name, email, phone in the user card', async () => {
  const store = setupStore();
  await store.dispatch(fetchUserList());
  const users = store.getState().userList.users;

  renderWithProviders(<UserList />, { store });

  const userCards = await screen.findAllByTestId('user-card');
  userCards.forEach((element, index) => {
    // information displayed on the card should match the state data
    expect(element).toHaveTextContent(users[index].name);
    expect(element).toHaveTextContent(users[index].email);
    expect(element).toHaveTextContent(users[index].phone);
  });
});

test('should be able to delete a user', async () => {
  const store = setupStore();
  await store.dispatch(fetchUserList());
  renderWithProviders(<UserList />, { store });

  const getFirstUserFromCard = async () => {
    const userCards = await screen.findAllByTestId('user-card');
    const userName = within(userCards[0]).getByTestId('user-name').textContent;

    return {
      userCards,
      userName,
    };
  };

  // first user should be deleted
  const { userCards, userName: initialUserName } = await getFirstUserFromCard();
  userEvent.click(within(userCards[0]).getByTestId('user-delete-button'));

  // confirm dialog modal should be shown
  expect(MySwal.getTitle()?.textContent).toBe('Confirm');
  // cancel user deletion
  MySwal.clickCancel();

  const { userName: currentFirstUserName } = await getFirstUserFromCard();

  // user is not deleted
  expect(currentFirstUserName).toBe(initialUserName);

  // confirm dialog modal should be shown
  userEvent.click(within(userCards[0]).getByTestId('user-delete-button'));
  expect(MySwal.getTitle()?.textContent).toBe('Confirm');
  // confirm user deletion
  MySwal.clickConfirm();

  await waitFor(() => {
    // deletion is successful
    expect(MySwal.getTitle()?.textContent).toBe('Success');
  });

  const updatedUserCards = await screen.findAllByTestId('user-card');
  const updatedFirsUserName = within(updatedUserCards[0]).getByTestId(
    'user-name'
  ).textContent;

  // user is deleted
  expect(initialUserName).not.toStrictEqual(updatedFirsUserName);
});
