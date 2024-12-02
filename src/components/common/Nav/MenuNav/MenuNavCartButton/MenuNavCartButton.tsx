import Button from '@components/common/Button/Button';
import useAuthVerify from '@hooks/queries/verify';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FormValues } from '../MenuNav';
import useCart from '@hooks/useCart';
import { useUpdateCartQuery } from '@hooks/queries/cart';

export default function MenuNavCartButton() {
  const { handleSubmit } = useFormContext<FormValues>();
  const { handleAddItem } = useCart();
  const { data: authData } = useAuthVerify();
  const { mutate } = useUpdateCartQuery();

  const onSubmit: SubmitHandler<FormValues> = data => {
    const cart = {
      carts: [data],
    };
    if (authData === 200) {
      mutate(cart);
    } else {
      handleAddItem({
        menuId: data.menu,
        optionIds: data.options,
        quantity: data.quantity,
      });
    }
  };
  return (
    <Button onClick={handleSubmit(onSubmit)} type='submit' variant='secondary'>
      장바구니 담기
    </Button>
  );
}
