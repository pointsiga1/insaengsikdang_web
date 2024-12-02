import { PropsWithChildren } from 'react';
import Delete from '@assets/icons/cart/delete.svg?react';

interface OptionModalHeaderProps {
  handleClose: () => void;
}

export default function OptionModalHeader({
  children,
  handleClose,
}: PropsWithChildren<OptionModalHeaderProps>) {
  return (
    <header>
      <div className='relative p-5'>
        <h3 className='font-bold text-lg text-center'>{children}</h3>
        <button
          className='absolute right-5 top-1/2 -translate-y-1/2'
          type='button'
          onClick={handleClose}
        >
          <Delete />
        </button>
      </div>
    </header>
  );
}
