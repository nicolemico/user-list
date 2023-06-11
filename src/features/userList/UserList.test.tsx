import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils';
import { UserList } from './UserList';

test('displays the skeleton while fetching the data', async () => {
  renderWithProviders(<UserList />);

  // should display 12 skeleton items while data is loading
  expect(screen.getAllByTestId('skeleton')).toHaveLength(12);

  expect(await screen.findAllByTestId('user-card')).toBeInTheDocument();
});
