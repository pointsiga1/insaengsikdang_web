import Cart from '@assets/icons/nav/shopping bag.svg?react';
import Search from '@assets/icons/nav/search.svg?react';
import Store from '@assets/icons/empty/store.svg?react';
import { PropsWithChildren } from 'react';

interface EmptyBoxProps {
  icon?: 'search' | 'store' | 'cart';
}

const renderIcon = {
  search: <Search className='w-10 h-10' />,
  store: <Store className='w-12 h-12' />,
  cart: <Cart className='w-12 h-12' />,
};

export default function EmptyBox({
  icon,
  children,
}: PropsWithChildren<EmptyBoxProps>) {
  return (
    <div className='mt-[50px] flex flex-col gap-2 justify-center items-center text-[#AAAAAA] text-center'>
      {icon && renderIcon[icon]}
      {children}
    </div>
  );
}
