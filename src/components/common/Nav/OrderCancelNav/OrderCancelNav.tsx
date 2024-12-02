import Button from '@components/common/Button/Button';
import Nav from '../Nav';
interface OrderCancelNavProps {
  disabled: boolean;
  handleClick: () => void;
}
export default function OrderCancelNav({
  disabled,
  handleClick,
}: OrderCancelNavProps) {
  return (
    <Nav>
      <Button variant='secondary' disabled={disabled} onClick={handleClick}>
        취소하기
      </Button>
    </Nav>
  );
}
