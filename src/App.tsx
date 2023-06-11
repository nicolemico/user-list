import { UsersIcon } from '@heroicons/react/24/outline';
import { UserList } from './features/userList';

const App = () => {
  return (
    <section className='flex justify-center items-center mt-24 mx-4'>
      <div className='container space-y-6'>
        <div className='flex items-center gap-4 text-gray-800'>
          <UsersIcon className='h-10 w-10' />
          <h1 className='text-4xl font-bold'>User List</h1>
        </div>
        <UserList />
      </div>
    </section>
  );
};

export default App;
