import OrderProductListItem from './OrderProductListItem/OrderProductListItem';
import OrderProductListTitle from './OrderProductListTitle/OrderProductListTitle';
import { CartItem } from '@src/types/cart';

export default function OrderProductList({
  store,
  menus,
}: Pick<CartItem, 'store' | 'menus'>) {
  return (
    <div className='border-[1px] border-[#E8E8E8] rounded-[12px]'>
      <div className='flex flex-row justify-between items-center p-3 border-b-[1px] border-b-[#E8E8E8]'>
        <OrderProductListTitle title={store} />
      </div>
      {menus.map((item, index) => {
        return <OrderProductListItem key={index} {...item} />;
      })}
    </div>
  );
}
