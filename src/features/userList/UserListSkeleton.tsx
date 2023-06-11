import { Card } from '../../components';

// Generate 12 skeleton cards for UserList
export const UserListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((value, index) => (
        <Card
          key={`skeleton-${index}`}
          data-testid='skeleton'
        >
          <div className='flex justify-between p-6'>
            <div className='bg-gray-300 h-4 w-1/2 animate-pulse rounded'></div>
            <div className='bg-gray-300 h-5 w-5 animate-pulse rounded'></div>
          </div>
          <div>
            <div className='flex flex-col divide-y xl:flex-row xl:divide-x xl:divide-y-0 divide-gray-200'>
              <div className='flex flex-1'>
                <div className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-bl-lg border border-transparent p-4 text-sm font-semibold text-gray-900'>
                  <div className='bg-gray-300 h-6 w-6 animate-pulse rounded'></div>
                  <div className='bg-gray-300 h-5 w-full animate-pulse rounded'></div>
                </div>
              </div>
              <div className='flex flex-1'>
                <div className='relative inline-flex items-center w-0 flex-1 gap-x-3 rounded-br-lg border border-transparent p-4 text-sm font-semibold text-gray-900'>
                  <div className='bg-gray-300 h-6 w-6 animate-pulse rounded'></div>
                  <div className='bg-gray-300 h-5 w-full animate-pulse rounded'></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
