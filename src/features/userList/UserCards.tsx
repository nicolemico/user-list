import { Card } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const UserCards = () => {
  const users = useSelector<RootState>((state) => state.userList.users);
  console.log(users);
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
};
