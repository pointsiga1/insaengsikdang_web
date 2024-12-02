import Button from '@components/common/Button/Button';
import Nav from '../../Nav';
import { useDeleteDeliveryQuery } from '@hooks/queries/user/delivery';

export default function DeliveryModifyNav() {
  const { mutate } = useDeleteDeliveryQuery();
  return (
    <Nav>
      <div className='flex gap-2'>
        <Button
          type='button'
          onClick={() => mutate()}
          variant='secondary-outline'
        >
          삭제하기
        </Button>
        <Button type='submit' variant='secondary'>
          수정하기
        </Button>
      </div>
    </Nav>
  );
}
