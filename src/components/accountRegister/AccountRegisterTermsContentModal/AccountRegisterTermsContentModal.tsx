import ContentContainer from '@components/common/Modal/Modal';
import AccountRegisterTermsContentHeader from './AccountRegisterTermsContentHeader/AccountRegisterTermsContentHeader';
import AccountRegisterTermsContentBody from './AccountRegisterTermsContentBody/AccountRegisterTermsContentBody';

interface AccountRegisterTermsContentModalProps {
  handleClose: () => void;
}

export default function AccountRegisterTermsContentModal({
  handleClose,
}: AccountRegisterTermsContentModalProps) {
  return (
    <ContentContainer handleClose={handleClose}>
      <div className='w-full min-h-screen max-w-[480px] flex items-center justify-center'>
        <div className='w-full mx-4 h-[620px] overflow-y-auto bg-white rounded-xl custom-scrollbar'>
          <AccountRegisterTermsContentHeader handleClose={handleClose} />
          <AccountRegisterTermsContentBody />
        </div>
      </div>
    </ContentContainer>
  );
}
