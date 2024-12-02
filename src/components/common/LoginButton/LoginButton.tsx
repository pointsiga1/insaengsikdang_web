import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface LoginButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: 'phone' | 'kakao' | 'naver';
  onClick: () => void;
}

const variantStyle = {
  phone: 'text-white bg-primary',
  kakao: 'bg-[#FEE102] text-[#391B1B]',
  naver: 'bg-[#03CF5D] text-white',
};

export default function LoginButton({
  variant,
  children,
  onClick,
  ...props
}: LoginButtonProps) {
  const buttonClass = variantStyle[variant];
  const handleClick = async () => {
    onClick();
  };
  return (
    <button
      className={`flex justify-center items-center gap-[6px] w-full py-4 text-base font-medium rounded-[10px] leading-5 ${buttonClass}`}
      type='button'
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
