import Modal from '@components/common/Modal/Modal';
import AccountRegisterTermsHeader from './AccountRegisterTermsHeader/AccountRegisterTermsHeader';
import AccountRegisterTermsBody from './AccountRegisterTermsBody/RegisterTermsBody';

interface AccountRegisterTermsModalProps {
  handleClose: () => void;
}

export default function AccountRegisterTermsModal({
  handleClose,
}: AccountRegisterTermsModalProps) {
  return (
    <Modal handleClose={handleClose}>
      <div className='w-full max-w-[480px] bg-white absolute bottom-0 rounded-t-xl'>
        <AccountRegisterTermsHeader handleClose={handleClose} />
        <AccountRegisterTermsBody />
      </div>
    </Modal>
  );
}
