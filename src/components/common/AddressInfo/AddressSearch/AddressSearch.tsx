import Button from '@components/common/Button/Button';
import AddressSearchModal, {
  AddressData,
} from './AddressSearchModal/AddressSearchModal';
import useModal from '@hooks/useModal';

interface AddressSearchProps {
  handeSearchAddress: (data: AddressData) => void;
}

export default function AddressSearch({
  handeSearchAddress,
}: AddressSearchProps) {
  const { isOpen, handleClose, toggleHandler } = useModal();

  return (
    <div className='w-[100px] whitespace-nowrap'>
      <Button
        weight='normal'
        height={40}
        type='button'
        variant='tertiary'
        fontSize='sm'
        onClick={toggleHandler}
      >
        주소검색
      </Button>
      {isOpen && (
        <AddressSearchModal
          handeSearchAddress={data => handeSearchAddress(data)}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
