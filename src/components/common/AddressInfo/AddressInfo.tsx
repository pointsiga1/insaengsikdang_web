import TextInput from '../TextInput/TextInput';
import Address from './Address/Address';
import Trash from '@assets/icons/cart/trash.svg?react';

interface AddressInfoProps {
  index: number;
  remove: (id: number) => void;
}

export default function AddressInfo({ index, remove }: AddressInfoProps) {
  return (
    <div className='flex flex-col gap-4 py-8 thick-border-bottom'>
      <div className='flex flex-row items-center justify-between px-4'>
        <p className='text-lg font-bold'>받는 분 {index + 1}</p>
        <button type='button' onClick={() => remove(index)}>
          <Trash />
        </button>
      </div>
      <div className='px-4 flex flex-col gap-3'>
        <TextInput
          name={`recipients.${index}.name`}
          message='이름을 입력해주세요'
        >
          이름
        </TextInput>
        <TextInput
          name={`recipients.${index}.phone`}
          message='휴대폰번호를 입력해주세요'
          maxLength={11}
        >
          휴대폰
        </TextInput>
        <Address index={index} />
      </div>
    </div>
  );
}
