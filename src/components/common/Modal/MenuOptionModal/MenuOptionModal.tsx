import { CartMenu } from '@src/types/cart';
import Modal from '../Modal';
import { useGetOptionsQuery } from '@hooks/queries/menu/options';
import OptionModalHeader from './OptionModalHeader/OptionModalHeader';
import OptionModalBody from './OptionModalBody/OptionModalBody';
import { useState } from 'react';
import OptionNav from '@components/common/Nav/OptionNav/OptionNav';
import useCart from '@hooks/useCart';
import useAuthVerify from '@hooks/queries/verify';
import { usePatchCartQuery } from '@hooks/queries/cart';
import { usePatchGiftCartQuery } from '@hooks/queries/cart/gift';

interface MenuOptionModalProps extends Pick<CartMenu, 'pk' | 'cart_id'> {
  handleClose: () => void;
  isGift: boolean;
}

export default function MenuOptionModal({
  pk,
  cart_id,
  handleClose,
  isGift,
}: MenuOptionModalProps) {
  const [selectItems, setSelectItems] = useState({
    id: pk,
    items: [] as number[],
  });
  const { data, isLoading } = useGetOptionsQuery(pk);
  const { data: authData } = useAuthVerify();
  const { mutate: patchCart } = usePatchCartQuery(cart_id!);
  const { mutate: patchGiftCart } = usePatchGiftCartQuery(cart_id!);
  const mutate = isGift ? patchGiftCart : patchCart;
  const { handleOptionModify } = useCart();

  const handleAddSelectItem = (id: number) => {
    setSelectItems(prev => ({
      ...prev,
      items: prev.items.includes(id)
        ? prev.items.filter(item => item !== id)
        : [...prev.items, id],
    }));
  };

  const handleSubmit = () => {
    if (authData === 200) {
      mutate({
        menu: pk,
        options: selectItems.items,
      });
    } else {
      handleOptionModify(selectItems.id, selectItems.items);
    }
    handleClose();
  };
  if (isLoading) return null;
  return (
    <Modal handleClose={handleClose}>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-white w-full max-w-[479px] min-h-[327px] max-h-[644px] rounded-t-[10px] pb-[80px]'>
        <OptionModalHeader handleClose={handleClose}>
          {data.name}
        </OptionModalHeader>
        <OptionModalBody
          handleAddSelectItem={handleAddSelectItem}
          option_groups={data.option_groups}
        />
        <OptionNav handleSubmit={handleSubmit} />
      </div>
    </Modal>
  );
}
