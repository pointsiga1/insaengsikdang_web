import Button from '@components/common/Button/Button';
import Nav from '../Nav';
import Buy from '@assets/icons/order/buy.svg?react';

export default function OrderNav({ price }: { price: number }) {
  return (
    <Nav>
      <Button variant='secondary' icon={<Buy />}>
        <p className='text-[#F9831F]'>{price.toLocaleString()}원</p> 결제하기
      </Button>
    </Nav>
  );
}
