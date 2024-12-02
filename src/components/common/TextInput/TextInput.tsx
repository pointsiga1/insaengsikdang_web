import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextInputProps {
  name?: string;
  message?: string;
  placeholder?: string;
  variant?: 'normal' | 'form';
  required?: boolean;
  maxLength?: number;
}

function getError(errors: any, path: string): any {
  return path
    .split(/[\.\[\]]+/)
    .filter(Boolean)
    .reduce((acc, key) => acc && acc[key], errors);
}

export default function TextInput({
  name,
  message,
  required = true,
  maxLength = 50,
  placeholder,
  children,
}: PropsWithChildren<TextInputProps>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className='flex flex-col'>
      {children && (
        <span className={`font-normal mb-1 text-sm text-secondary`}>
          {children}
        </span>
      )}
      <input
        className='px-2 border border-[#D3D3D3] h-[40px] text-sm rounded-md focus:border-primary focus:outline-none placeholder:text-[#AAAAAA] placeholder:text-sm w-full'
        placeholder={placeholder}
        {...register(name || '', {
          required: {
            value: required,
            message: message || '',
          },
          maxLength: maxLength,
        })}
      />
      {getError(errors, name || '')?.type === 'required' && (
        <p className='m-1 text-xs text-primary' role='alert'>
          {message}
        </p>
      )}
    </label>
  );
}
