import { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  handleClose: () => void;
}

export default function Modal({
  children,
  handleClose,
}: PropsWithChildren<ModalProps>) {
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        handleClose();
      }}
      className='fixed z-50 top-0 w-full h-full bg-opacity-60 bg-black'
    >
      <div
        className='max-w-[480px] mx-auto'
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}
