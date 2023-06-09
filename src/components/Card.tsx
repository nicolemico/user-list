import { XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

export const Card = () => {
  return (
    <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'>
      <div className='flex justify-between p-6'>
        <h3 className='truncate font-medium text-gray-900'>Jane Coop</h3>
        <XMarkIcon className='h-4 w-4 text-gray-400' />
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <a
              href='mailto:janecooper@example.com'
              className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
            >
              <EnvelopeIcon className='h-6 w-6 text-gray-400' />
              Email
            </a>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a
              href='tel:+1-202-555-0170'
              className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
            >
              <PhoneIcon className='h-6 w-6 text-gray-400' />
              Call
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
