import reducer, { deleteUser, initialState } from './userListSlice';
import { UserListState } from 'types';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should handle delete users', async () => {
  const previousState: UserListState = {
    status: 'succeeded',
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
      },
    ],
  };

  // should remove 1st user from state
  expect(reducer(previousState, deleteUser(1))).toEqual({
    ...previousState,
    users: previousState.users.slice(1),
  });
});
