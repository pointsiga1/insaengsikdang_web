import CloseSvg from '@assets/icons/accountRegister/close.svg?react';

interface AccountRegisterTermsHeaderProps {
  handleClose: () => void;
}

export default function AccountRegisterTermsHeader({
  handleClose,
}: AccountRegisterTermsHeaderProps) {
  return (
    <div className='p-5 flex justify-between items-center'>
      <p className='text-xl font-bold leading-[100%]'>이용약관</p>
      <CloseSvg className='cursor-pointer' onClick={handleClose} />
    </div>
  );
}
