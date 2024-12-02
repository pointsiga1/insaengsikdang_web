import Button from '@components/common/Button/Button';
import Nav from '../Nav';
interface ReviewWriteNavProps {
  disabled: boolean
}
export default function ReviewWriteNav({ disabled }: ReviewWriteNavProps) {
  return (
    <Nav>
      <Button variant='secondary' disabled={disabled}>
        후기 등록하기
      </Button>
    </Nav>
  );
}
