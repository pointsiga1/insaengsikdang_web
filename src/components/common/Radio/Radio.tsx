import { PropsWithChildren } from 'react';

interface RadioProps {
  pk: number | string;
  value: number;
  handleChange: (checked: boolean) => void;
  weight?: 'bold' | 'normal';
}

export default function Radio({
  pk,
  value,
  handleChange,
  weight = 'bold',
  children,
}: PropsWithChildren<RadioProps>) {
  const isChecked = value === pk;
  const textClass = weight === 'bold' ? 'font-bold' : 'font-normal';
  return (
    <label className='flex items-center gap-[6px]'>
      <input
        type='radio'
        checked={isChecked}
        onChange={e => handleChange(e.target.checked)}
        className='hidden'
      />
      <div
        className={`flex items-center justify-center w-5 h-5 border border-[#D3D3D3] rounded-full ${
          isChecked && 'border-primary'
        }`}
      >
        <div
          className={`w-[12px] h-[12px] rounded-full ${
            isChecked && 'bg-primary'
          }`}
        />
      </div>
      {children && (
        <span className={`font-bold text-secondary ${textClass}`}>
          {children}
        </span>
      )}
    </label>
  );
}
