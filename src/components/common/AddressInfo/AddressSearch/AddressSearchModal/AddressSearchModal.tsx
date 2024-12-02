import Modal from '@components/common/Modal/Modal';
import DaumPostcode from 'react-daum-postcode';

export interface AddressData {
  address: string;
  zonecode: string;
}

interface AddressSearchModalProps {
  onClose: () => void;
  handeSearchAddress: (data: AddressData) => void;
}

export default function AddressSearchModal({
  onClose,
  handeSearchAddress,
}: AddressSearchModalProps) {
  const completeHandler = (data: AddressData) => {
    handeSearchAddress(data);
  };

  return (
    <Modal handleClose={onClose}>
      <div className='fixed top-0 bottom-0 right-0 left-0 mx-auto max-w-[480px] z-50'>
        <div className='relative h-[100%] pt-[60px] bg-white'>
          <button
            onClick={onClose}
            className='text-2xl absolute top-[15px] right-[10px] cursor-pointer z-50'
          >
            &times;
          </button>
          <DaumPostcode
            style={{
              height: '100vh',
            }}
            onComplete={completeHandler}
            onClose={onClose}
          />
        </div>
      </div>
    </Modal>
  );
}
