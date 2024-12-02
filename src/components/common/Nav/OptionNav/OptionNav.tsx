import Button from '@components/common/Button/Button';
import Nav from '../Nav';

interface OptionNavProp {
  handleSubmit: () => void;
}

export default function OptionNav({ handleSubmit }: OptionNavProp) {
  return (
    <Nav>
      <Button type='button' variant='secondary' onClick={handleSubmit}>
        변경하기
      </Button>
    </Nav>
  );
}
