import { Shop } from '@src/types/shop';
import { PropsWithChildren } from 'react';
import MapPin from '@assets/icons/card/map-pin.svg?react';
import Box from '@assets/icons/card/box.svg?react';
import { extractLocation } from '@src/utils/addressFormat';

export default function ProductCardDetails({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

function Title({ children }: PropsWithChildren) {
  return <h3 className='text-sm font-bold mb-[1px]'>{children}</h3>;
}
function Introduction({ children }: PropsWithChildren) {
  return <p className='text-xs truncate'>{children}</p>;
}

function Additional({
  min_order_amount,
  location,
}: Pick<Shop, 'min_order_amount' | 'location'>) {
  return (
    <ul className='mt-2'>
      <li className='flex items-center gap-[5px]'>
        <MapPin />
        <p className='text-xs text-[#898989]'>{extractLocation(location)}</p>
      </li>
      <li className='flex items-center gap-[5px]'>
        <Box />
        <p className='text-xs text-[#898989]'>{min_order_amount}원 이상 구매</p>
      </li>
    </ul>
  );
}

ProductCardDetails.Title = Title;
ProductCardDetails.Introduction = Introduction;
ProductCardDetails.Additional = Additional;
