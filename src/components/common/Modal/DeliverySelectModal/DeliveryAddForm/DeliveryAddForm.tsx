import Button from '@components/common/Button/Button';
import Nav from '@components/common/Nav/Nav';
import DeliveryEditInputs from '@components/mypage/delivery/edit/DeliveryEditInputs/DeliveryEditInputs';
import { FormProvider, useForm } from 'react-hook-form';

export default function DeliveryAddForm() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <DeliveryEditInputs />
        <Nav>
          <Button variant='secondary'>추가하기</Button>
        </Nav>
      </form>
    </FormProvider>
  );
}
