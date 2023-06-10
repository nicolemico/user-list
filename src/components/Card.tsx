import type { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <li className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow hover:shadow-md'>
      {children}
    </li>
  );
};
