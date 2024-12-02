import { LabelHTMLAttributes, PropsWithChildren } from 'react';

export default function Label({
  children,
  ...props
}: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
  return (
    <label className='block text-xs mb-[5px]' {...props}>
      {children}
    </label>
  );
}
