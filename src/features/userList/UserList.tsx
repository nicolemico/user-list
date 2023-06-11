import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid';

import { UserCard } from './UserCard';
import { fetchUserList } from './userListSlice';
import type { AppDispatch, RootState } from '../../app/store';
import { deleteUser } from './userListSlice';
import { swalAlert } from '../../utils';
import type { User } from '../../types';
import { UserListSkeleton } from './UserListSkeleton';

export const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status, users } = useSelector((state: RootState) => state.userList);

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
      });
    }
  }, [dispatch, status]);

  const handleRemoveUser = async (user: User) => {
    const { isConfirmed } = await swalAlert({
      title: 'Confirm',
      html: `<p>Are you sure you want to delete user <b>${user.name}</b>?</p>`,
      showCancelButton: true,
      icon: 'question',
    });

    if (!isConfirmed) return;

    dispatch(deleteUser(user.id));
    swalAlert({
      title: 'Success',
      html: `<p>Successfully deleted user <b>${user.name}</b>.</p>`,
      icon: 'success',
    });
  };

  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {status === 'loading' ? (
        <UserListSkeleton />
      ) : (
        <>
          {users.length > 0 ? (
            users.map((user, index) => (
              <UserCard
                user={user}
                key={`usercard-${index}`}
                removeUser={handleRemoveUser}
              />
            ))
          ) : (
            <div className='col-span-3 flex flex-col gap-6 items-center justify-center w-full h-[650px] bg-white rounded-lg shadow'>
              <ArchiveBoxXMarkIcon className='h-12 w-12 text-gray-400' />
              <span className='text-lg'>No data to display.</span>
            </div>
          )}
        </>
      )}
    </ul>
  );
};
