import { DeliveryType } from '@src/types/user/delivery';
import { formatPhoneNumber } from '@src/utils/formatPhoneNumber';

export default function DeliveryInfo({
  address,
  address_detail,
  name,
  phone,
}: Omit<DeliveryType, 'zip_code' | 'is_default' | 'pk'>) {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-sm'>
        {address}, {address_detail}
      </span>
      <div className='flex items-center'>
        <span className='text-[#898989] text-sm pr-[11px] custom-dividing-line after:bg-[#aaaaaa]'>
          {name}
        </span>
        <span className='text-[#898989] text-sm pl-[10px]'>
          {formatPhoneNumber(phone)}
        </span>
      </div>
    </div>
  );
}
