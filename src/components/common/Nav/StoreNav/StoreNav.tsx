import Nav from '../Nav';
import CartButton from './CartButton/CartButton';
import GiftButton from './GiftButton/GiftButton';

export default function StoreNav() {
  return (
    <Nav>
      <ul className='flex gap-2'>
        <li>
          <GiftButton />
        </li>
        <li className='w-full'>
          <CartButton />
        </li>
      </ul>
    </Nav>
  );
}
