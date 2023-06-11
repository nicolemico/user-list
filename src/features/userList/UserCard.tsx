import { XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Card } from '../../components';
import { User } from '../../types';

export const UserCard = ({ user, removeUser }: UserCardsProp) => {
  const handleClickRemoveUser = (user: User) => () => removeUser?.(user);

  return (
    <Card data-testid='user-card'>
      <div className='flex justify-between p-6'>
        <h3
          className='truncate font-medium text-gray-900'
          data-testid='user-name'
        >
          {user.name}
        </h3>
        <XMarkIcon
          className='h-4 w-4 text-gray-400 transition-transform hover:text-red-500 hover:-rotate-90 hover:cursor-pointer'
          onClick={user && handleClickRemoveUser(user)}
        />
      </div>
      <div className='flex flex-col xl:flex-row divide-y xl:divide-x xl:divide-y-0 divide-gray-200'>
        <div className='flex flex-1'>
          <a
            href={`mailto:${user.email}`}
            className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-bl-lg border border-transparent p-4 text-sm font-semibold text-gray-900 break-all'
          >
            <EnvelopeIcon className='h-6 w-6 text-gray-400' />
            {user.email}
          </a>
        </div>
        <div className='flex flex-1'>
          <a
            href={`tel:${user.phone}`}
            className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-br-lg border border-transparent p-4 text-sm font-semibold text-gray-900 break-all'
          >
            <PhoneIcon className='h-6 w-6 text-gray-400' />
            {user?.phone}
          </a>
        </div>
      </div>
    </Card>
  );
};

type UserCardsProp = {
  user: User;
  removeUser: (user: User) => void;
};
