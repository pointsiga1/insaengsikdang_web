import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextAreaProps {
  name: string;
  placeholder: string;
  message?: string;
  height?: number;
  maxLength?: number;
  minLength?: number;
}

export default function TextArea({
  name,
  placeholder,
  message,
  maxLength = 1000,
  minLength = 10,
  height = 178,
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [charCount, setCharCount] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
  };
  const errorMsg = errors[name]?.message as string;

  return (
    <div className='flex flex-col relative'>
      <textarea
        placeholder={placeholder}
        {...register(name, {
          required: message,
          minLength: {
            value: minLength,
            message: `최소 ${minLength}자 이상 입력해주세요.`,
          },
          maxLength: {
            value: maxLength,
            message: `최대 ${maxLength}자까지만 입력 가능합니다.`,
          },
        })}
        onChange={handleChange}
        maxLength={maxLength}
        className='p-[10px] border border-[#D3D3D3] h-[40px] rounded-md focus:border-primary focus:outline-none placeholder:text-[#AAAAAA] placeholder:text-sm'
        style={{ height: `${height}px` }}
      />
      <div className='flex flex-row w-full justify-between items-center absolute bottom-0 p-[10px]'>
        <span className='text-primary text-[12px] leading-[17px]'>
          {errorMsg}
        </span>
        <span className='text-primary text-[12px] leading-[17px]'>
          {charCount}
          <span className='text-[#C0C0C0]'>
            &nbsp;| {maxLength.toLocaleString()}
          </span>
        </span>
      </div>
    </div>
  );
}
