import Plus from '@assets/icons/cart/plus.svg?react';

interface QuantityPlusType {
  onClick: () => void;
}

export default function QuantityPlus({ onClick }: QuantityPlusType) {
  return (
    <button type='button' onClick={onClick}>
      <Plus />
    </button>
  );
}
