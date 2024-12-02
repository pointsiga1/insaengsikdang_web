import Button from '@components/common/Button/Button';
import { useUpdateGiftCartQuery } from '@hooks/queries/cart/gift';
import useAuthVerify from '@hooks/queries/verify';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FormValues } from '../MenuNav';

export default function MenuNavGiftButton() {
  const { handleSubmit } = useFormContext<FormValues>();
  const { data: authData } = useAuthVerify();
  const { mutate } = useUpdateGiftCartQuery();

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (authData === 200) {
      const cart = {
        carts: [data],
      };
      mutate(cart);
    } else {
      alert('로그인이 필요한 서비스 입니다.');
    }
  };
  return (
    <Button onClick={handleSubmit(onSubmit)} variant='secondary-outline'>
      선물 담기
    </Button>
  );
}
