import Button from '@components/common/Button/Button';
import Nav from '../../Nav';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function DeliveryAddNav() {
  const { watch } = useFormContext();
  const navigate = useNavigate();
  const isDisabled = watch('address');
  return (
    <Nav>
      <Button
        onClick={() => navigate(-1)}
        type='submit'
        disabled={!isDisabled}
        variant='secondary'
      >
        등록하기
      </Button>
    </Nav>
  );
}
