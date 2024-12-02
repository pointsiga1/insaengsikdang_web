import { PropsWithChildren } from 'react';
import CheckboxOff from '@assets/icons/common/checkbox_off.svg?react';
import CheckboxOn from '@assets/icons/common/checkbox_on.svg?react';

interface CheckboxProps {
  pk: number | string;
  value: (number | string)[];
  handleChange: (checked: boolean) => void;
  weight?: 'bold' | 'normal';
  itemsCenter?: boolean;
}

export default function Checkbox({
  pk,
  value,
  handleChange,
  weight = 'bold',
  children,
  itemsCenter = true,
}: PropsWithChildren<CheckboxProps>) {
  const isChecked = value.includes(pk);
  const textClass = weight === 'bold' ? 'font-bold' : 'font-normal';
  return (
    <label className={`flex ${itemsCenter ? 'items-center' : ''} gap-[6px]`}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={e => handleChange(e.target.checked)}
        className='hidden'
      />
      {isChecked ? <CheckboxOn /> : <CheckboxOff />}
      <span className={`font-bold text-secondary ${textClass}`}>
        {children}
      </span>
    </label>
  );
}
