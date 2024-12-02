import { Link } from 'react-router-dom';
import Gift from '@assets/icons/nav/present.svg?react';

export default function GiftButton() {
  return (
    <Link
      className='w-[52px] h-[52px] rounded-lg border border-secondary flex items-center justify-center'
      to={'/cart/gift'}
    >
      <Gift />
    </Link>
  );
}
