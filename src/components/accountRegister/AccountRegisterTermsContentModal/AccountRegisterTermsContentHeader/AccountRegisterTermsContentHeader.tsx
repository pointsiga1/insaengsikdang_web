import CloseSvg from '@assets/icons/accountRegister/close.svg?react';

interface AccountRegisterTermsHeaderProps {
  handleClose: () => void;
}

export default function AccountRegisterTermsContentHeader({
  handleClose,
}: AccountRegisterTermsHeaderProps) {
  return (
    <div className='px-4 py-5 flex justify-between items-center'>
      <span className="text-neutral-700 text-2xl font-bold leading-[31.20px]">이용약관</span>
      <CloseSvg className='cursor-pointer' onClick={handleClose} />
    </div>
  );
}
