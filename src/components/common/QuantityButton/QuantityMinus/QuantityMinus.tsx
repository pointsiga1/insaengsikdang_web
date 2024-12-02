import Minus from '@assets/icons/cart/minus.svg?react';

interface QuantityMinusProps {
  onClick: () => void;
}

export default function QuantityMinus({ onClick }: QuantityMinusProps) {
  return (
    <button type='button' onClick={onClick}>
      <Minus />
    </button>
  );
}
