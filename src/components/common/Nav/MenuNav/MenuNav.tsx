import Nav from '../Nav';
import MenuNavCartButton from './MenuNavCartButton/MenuNavCartButton';
import MenuNavGiftButton from './MenuNavGiftButton/MenuNavGiftButton';

export interface FormValues {
  menu: number;
  quantity: number;
  options: number[];
}

export default function MenuNav() {
  return (
    <Nav>
      <div className='flex gap-2'>
        <MenuNavGiftButton />
        <MenuNavCartButton />
        {/* nav 가격 텍스트 */}
        {/* <p
          className='absolute font-bold text-secondary text-base -top-8 left-1/2 -translate-x-1/2 animate-bounce-custom'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}
        >
          "6,000원"
        </p> */}
      </div>
    </Nav>
  );
}
