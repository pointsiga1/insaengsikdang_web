import Modal from '../Modal';
import DeliverySelect from './DeliverySelect/DeliverySelect';

export interface DeliverySelectModalProps {
  onClose: () => void;
  pk: number;
}

export default function DeliverySelectModal({
  onClose,
  pk,
}: DeliverySelectModalProps) {
  return (
    <Modal handleClose={onClose}>
      <div className='max-w-[480px] mx-auto h-screen bg-white'>
        <div className='text-end p-4 pb-0'>
          <button onClick={onClose} className='text-2xl'>
            &times;
          </button>
        </div>
        <DeliverySelect onClose={onClose} pk={pk} />
      </div>
    </Modal>
  );
}
