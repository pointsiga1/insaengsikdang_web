import Button from '@components/common/Button/Button';
import Nav from '@components/common/Nav/Nav';
import { useNavigate } from 'react-router-dom';

export default function DeliveryNav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/mypage/delivery/edit');
  };
  return (
    <Nav>
      <Button onClick={handleClick} variant='secondary'>
        배송지 추가하기
      </Button>
    </Nav>
  );
}
