import Button from '@components/common/Button/Button';
import Nav from '../Nav';
import Bell from '@assets/icons/cart/bell.svg?react';

export default function CartNav() {
  return (
    <Nav>
      <Button variant='secondary' icon={<Bell />}>
        주문하기
      </Button>
    </Nav>
  );
}
