import { XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { Card } from '../../components';
import { User } from '../../types';

export const UserCards = ({ user, removeUser, isLoading }: UserCardsProp) => {
  const handleClickRemoveUser = (user: User) => () => removeUser?.(user);

  return (
    <Card>
      <div className='flex justify-between p-6'>
        {isLoading ? (
          <div className='bg-gray-400 h-4 w-1/2 animate-pulse'></div>
        ) : (
          <h3 className='truncate font-medium text-gray-900'>{user?.name}</h3>
        )}
        <XMarkIcon
          className='h-4 w-4 text-gray-400 transition-transform hover:text-red-500 hover:-rotate-90 hover:cursor-pointer'
          onClick={user && handleClickRemoveUser(user)}
        />
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a
              href={`mailto:${user?.email}`}
              className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-bl-lg border border-transparent p-4 text-sm font-semibold text-gray-900'
            >
              <EnvelopeIcon className='h-6 w-6 text-gray-400' />
              {isLoading ? (
                <div className='bg-gray-400 h-4 w-full animate-pulse'></div>
              ) : (
                <>{user?.email}</>
              )}
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a
              href={`tel:${user?.phone}`}
              className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-br-lg border border-transparent p-4 text-sm font-semibold text-gray-900'
            >
              <PhoneIcon className='h-6 w-6 text-gray-400' />
              {isLoading ? (
                <div className='bg-gray-400 h-4 w-full animate-pulse'></div>
              ) : (
                <>{user?.phone}</>
              )}
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

type UserCardsProp = {
  user?: User;
  removeUser?: (user: User) => void;
  isLoading?: boolean;
};
