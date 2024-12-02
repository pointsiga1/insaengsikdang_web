import Camera from '@assets/icons/review/camera.svg?react'
import { ButtonHTMLAttributes } from 'react';

export interface PhotoSelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export default function PhotoSelectButton({ ...props }: PhotoSelectButtonProps) {
  return (
    <div className='inline-block'>
      <button className="border-[1px] border-[#C0C0C0] border-dashed w-[70px] h-[70px] rounded-[10px] items-center justify-center flex"
        {...props}>
        <Camera />
      </button>
    </div>
  );
}
