import CartMenuCardItem from '@components/cart/CartStoreList/CartStoreListItem/CartMenuList/CartMenuListItem/CartMenuCard/CartMenuCardItem/CartMenuCardItem';
import { CartMenu, CartMenuOption } from '@src/types/cart';
import { v4 as uuidv4 } from 'uuid';

export default function OrderProductListItem({
  name,
  image,
  option_groups,
  total_price,
  quantity,
}: Omit<CartMenu, 'cart_id' | 'gift_recipients'>) {
  return (
    <div className={'m-3 flex flex-row items-center'}>
      <img
        src={image}
        className='w-[110px] h-[110px] rounded-[10px] object-cover'
      />
      <div className='ml-3 flex flex-col flex-1'>
        <p className='text-[16px] leading-[22px] font-bold text-primary-black'>
          {name}
        </p>
        <div className='flex flex-row mt-2 items-center'>
          <p className='text-[16px] leading-[22px] text-primary-black pr-3 custom-dividing-line after:bg-[#aaaaaa]'>
            {total_price}원
          </p>
          <p className='text-[16px] leading-[22px] text-primary-black pl-3'>
            {quantity}개
          </p>
        </div>
        {option_groups.length > 0 && (
          <ul className='mt-2 flex flex-col gap-[2px]'>
            {option_groups.map((optionItem: CartMenuOption) => {
              return (
                <CartMenuCardItem key={uuidv4()} optionItem={optionItem} />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
