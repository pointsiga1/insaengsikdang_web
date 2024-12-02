import { DeliveryType } from '@src/types/user/delivery';
import DeliverySelectList from './DeliverySelectList/DeliverySelectList';
import Nav from '@components/common/Nav/Nav';
import Button from '@components/common/Button/Button';
import { useState } from 'react';
import { useGetAllDeliveryQuery } from '@hooks/queries/user/delivery';
import { DeliverySelectModalProps } from '../DeliverySelectModal';
import DeliveryNoData from '../DeliveryNoData/DeliveryNoData';
import { useFormContext } from 'react-hook-form';

export default function DeliverySelect({
  pk,
  onClose,
}: DeliverySelectModalProps) {
  const { data, isLoading } = useGetAllDeliveryQuery();
  const [selected, setSelected] = useState<number>(pk);
  const { setValue } = useFormContext();
  const handleSelect = (pk: number) => {
    setSelected(pk);
  };
  const handleClick = () => {
    setValue('delivery_addr', selected);
    onClose();
  };

  if (isLoading) return null;
  return data.delivery_addrs.length === 0 ? (
    <DeliveryNoData />
  ) : (
    <>
      <ul className='flex flex-col px-4'>
        {data.delivery_addrs.map((deliveryItem: DeliveryType) => {
          return (
            <DeliverySelectList
              key={deliveryItem.pk}
              deliveryItem={deliveryItem}
              selected={selected}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
      <Nav>
        <Button variant='secondary' type='button' onClick={handleClick}>
          선택하기
        </Button>
      </Nav>
    </>
  );
}
