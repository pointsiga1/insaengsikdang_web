import { Coupons } from '@src/types/order';
import Modal from '../Modal';
import Coupon from '@components/common/Coupon/Coupon';
import { PostDataType } from '@src/apis/orderInfo/calculate';
import { useFormContext } from 'react-hook-form';

export interface CouponModalProps {
  onClose: () => void;
  coupons: Coupons[];
  handleAddPostData: (data: Omit<PostDataType, 'cart_ids'>) => void;
  handleChangeText: (text: string) => void;
}

export default function CouponModal({
  onClose,
  coupons,
  handleAddPostData,
  handleChangeText,
}: CouponModalProps) {
  const { setValue } = useFormContext();
  return (
    <Modal handleClose={onClose}>
      <div className='h-screen bg-white'>
        <div className='text-end p-4 pb-0'>
          <button onClick={onClose} className='text-2xl'>
            &times;
          </button>
        </div>
        <ul className='flex flex-col gap-4 px-4 mt-3'>
          {coupons.map(couponItem => {
            return (
              <li key={couponItem.pk}>
                <button
                  onClick={() => {
                    handleAddPostData({
                      coupon: couponItem.pk,
                    });
                    handleChangeText(
                      `[${couponItem.store_name}] ${couponItem.type}`
                    );
                    setValue('coupon', couponItem.pk);
                    onClose();
                  }}
                  disabled={!couponItem.is_usable}
                  className='w-full text-start'
                >
                  <Coupon couponItem={couponItem} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
}
