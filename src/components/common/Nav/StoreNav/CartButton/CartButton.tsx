import { Link } from 'react-router-dom';
import ShopBag from '@assets/icons/nav/shopping bag.svg?react';
import useCart from '@hooks/useCart';
import { useGetCartCountQuery } from '@hooks/queries/cart';

export default function CartButton() {
  const { count } = useCart();
  const { data, isLoading } = useGetCartCountQuery();
  if (isLoading) return null;
  return (
    <Link
      className='flex items-center gap-2 justify-center w-full h-full bg-secondary rounded-lg'
      to={'/cart'}
    >
      <div className='relative bottom-[1px]'>
        <ShopBag />
        <p className='absolute left-1/2 -translate-x-1/2 bottom-0 font-extrabold text-secondary text-xs leading-[14px]'>
          {data ? data.cart_count : count}
        </p>
      </div>
      <span className='text-white font-bold text-lg'>장바구니</span>
    </Link>
  );
}
