import { Coupons } from '@src/types/order';
import { calculateDaysUntil, dateFormatYMD } from '@src/utils/dateFormat';

interface CouponProps {
  couponItem: Coupons;
}

export default function Coupon({ couponItem }: CouponProps) {
  const disabledClass = !couponItem.is_usable && '!text-[#AAAAAA]';
  return (
    <div className='border border-[#E8E8E8] rounded-[10px]'>
      <div className='pt-4 px-[18px] pb-3'>
        <p className={`font-bold text-primary text-lg ${disabledClass}`}>
          <strong className={`text-2xl font-extrabold ${disabledClass}`}>
            {couponItem.discount_amount}원
          </strong>{' '}
          할인
        </p>
        <p className={`mt-[2px] font-bold text-lg ${disabledClass}`}>
          [{couponItem.store_name}] {couponItem.type}
        </p>
        <span
          className={`block mt-[10px] text-xs text-[#898989] ${disabledClass}`}
        >
          {couponItem.min_order_amount.toLocaleString()}원부터 사용 가능
        </span>
      </div>
      <div className='flex items-center border-t-2 border-dotted border-[#E8E8E8] px-[18px] pb-3 pt-[9px]'>
        <p
          className={`text-primary text-xs font-bold pr-2 custom-dividing-line after:bg-[#AAAAAA] ${disabledClass}`}
        >
          {calculateDaysUntil(couponItem.end_at)}일 남음
        </p>
        <p className={`pl-2 text-xs text-[#898989] ${disabledClass}`}>
          {dateFormatYMD(couponItem.end_at)}까지
        </p>
      </div>
    </div>
  );
}
