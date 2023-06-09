import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserCards } from './UserCards';
import { fetchUserList } from './userListSlice';
import { AppDispatch, RootState } from '../../app/store';

export const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector<RootState>((state) => state.userList.status);

  useEffect(() => {
    if (status === 'pending') {
      dispatch(fetchUserList());
    }
  }, [dispatch, status]);

  return (
    <section className='flex justify-center items-center my-12'>
      <div className='container space-y-6'>
        <h1 className='text-2xl font-bold'>User List</h1>
        <UserCards />
      </div>
    </section>
  );
};
