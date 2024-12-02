import DeliveryInfo from '@components/common/DeliveryInfo/DeliveryInfo';
import Radio from '@components/common/Radio/Radio';
import DefaultDelivery from '@components/mypage/delivery/delivery/DeliveryList/DeliveryItem/DefaultDelivery/DefaultDelivery';
import { DeliveryType } from '@src/types/user/delivery';

interface DeliverySelectListProps {
  deliveryItem: DeliveryType;
  handleSelect: (pk: number) => void;
  selected: number;
}

export default function DeliverySelectList({
  deliveryItem,
  selected,
  handleSelect,
}: DeliverySelectListProps) {
  return (
    <li className='flex items-start gap-4 py-5 border-b border-[#E8E8E8]'>
      <Radio
        value={selected}
        handleChange={checked => {
          if (checked) {
            handleSelect(deliveryItem.pk);
          }
        }}
        pk={deliveryItem.pk}
      />
      <div className='flex flex-col gap-2'>
        {deliveryItem.is_default && <DefaultDelivery />}
        <DeliveryInfo {...deliveryItem} />
      </div>
    </li>
  );
}
