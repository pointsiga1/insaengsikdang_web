import Button from '@components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function DeliveryNoData() {
  const navigate = useNavigate();
  const handleAddDelivery = () => {
    navigate('/mypage/delivery/edit');
  };
  return (
    <div className='flex flex-col gap-5 items-center justify-center pb-24 h-full'>
      <p className='text-lg'>등록된 배송지가 없습니다.</p>
      <div className='w-40'>
        <Button
          fontSize='md'
          weight='normal'
          type='button'
          onClick={handleAddDelivery}
        >
          배송지 추가하기
        </Button>
      </div>
    </div>
  );
}
