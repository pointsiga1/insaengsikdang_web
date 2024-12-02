import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import {
  DISABLED_CLASS,
  FONT_SIZE_CLASS,
  FONT_WEIGHT_CLASS,
  VARIANT_CLASS,
} from './buttonClass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'tertiary'
    | 'outline';
  icon?: ReactElement;
  height?: number;
  fontSize?: 'lg' | 'md' | 'sm';
  weight?: 'bold' | 'normal';
}

export default function Button({
  children,
  variant = 'primary',
  fontSize = 'lg',
  weight = 'bold',
  height = 52,
  icon,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonClassName = `flex items-center justify-center gap-[8px] rounded-lg w-full 
  ${VARIANT_CLASS[variant]} ${FONT_SIZE_CLASS[fontSize]} ${FONT_WEIGHT_CLASS[weight]} ${DISABLED_CLASS[variant]}`;

  return (
    <button
      className={buttonClassName}
      style={{ height: `${height}px` }}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
