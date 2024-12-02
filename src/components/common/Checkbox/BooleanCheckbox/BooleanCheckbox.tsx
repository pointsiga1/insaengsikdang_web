import CheckboxOff from '@assets/icons/common/checkbox_off.svg?react';
import CheckboxOn from '@assets/icons/common/checkbox_on.svg?react';
import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

interface BooleanCheckboxProps {
  handleChange: () => void;
  isChecked: boolean;
  name: string;
  weight?: 'bold' | 'normal';
}

export default function BooleanCheckbox({
  isChecked,
  handleChange,
  name,
  weight = 'normal',
  children,
}: PropsWithChildren<BooleanCheckboxProps>) {
  const { register } = useFormContext();
  const textClass = weight === 'bold' ? 'font-bold' : 'font-normal';
  return (
    <label className='flex items-center gap-[6px]'>
      <input
        {...register(name)}
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='hidden'
      />
      {isChecked ? <CheckboxOn /> : <CheckboxOff />}
      <span className={`text-sm ${textClass}`}>{children}</span>
    </label>
  );
}
