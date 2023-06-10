import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';

import { UserCards } from './UserCards';
import { fetchUserList } from './userListSlice';
import type { AppDispatch, RootState } from '../../app/store';
import { deleteUser } from './userListSlice';
import { swalAlert } from '../../utils';
import type { User } from '../../types';

export const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.userList.status);
  const users = useSelector((state: RootState) => state.userList.users);

  useEffect(() => {
    if (status === 'pending') {
      dispatch(fetchUserList());
      return;
    }

    if (status === 'failed') {
      swalAlert({
        title: 'Error',
        html: 'An error has occured while fetching users.',
        icon: 'error',
        toast: true,
      });
    }
  }, [dispatch, status]);

  const handleRemoveUser = async (user: User) => {
    const { isConfirmed } = await swalAlert({
      title: 'Confirm delete',
      html: `<p>Are you sure you want to delete user <b>${user.name}</b>?</p>`,
      showCancelButton: true,
      icon: 'question',
    });

    if (isConfirmed) dispatch(deleteUser(user.id));
  };

  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {status === 'loading' ? (
        <>
          {Array.from({ length: 12 }).map((value, index) => (
            <UserCards
              key={`skeleton-${index}`}
              isLoading={true}
            />
          ))}
        </>
      ) : (
        <>
          {users.length > 0 ? (
            users.map((user, index) => (
              <UserCards
                user={user}
                key={`usercard-${index}`}
                removeUser={handleRemoveUser}
              />
            ))
          ) : (
            <div className='flex flex-col gap-6 items-center justify-center w-100 h-[650px] bg-white rounded-lg shadow'>
              <ArchiveBoxXMarkIcon className='h-12 w-12 text-gray-400' />
              <span className='text-lg'>No data to display.</span>
            </div>
          )}
        </>
      )}
    </ul>
  );
};
