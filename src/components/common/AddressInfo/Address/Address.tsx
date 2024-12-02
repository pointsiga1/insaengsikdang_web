import TextInput from '@components/common/TextInput/TextInput';
import AddressInput from '@components/common/TextInput/AddressInput/AddressInput';

interface AddressProps {
  index: number;
}
export default function Address({ index }: AddressProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center'>
        <AddressInput
          preName={`recipients.${index}`}
          message='주소를 입력해주세요'
        >
          주소
        </AddressInput>
      </div>
      <TextInput
        name={`recipients.${index}.address_detail`}
        message='상세주소를 입력해주세요'
        required={false}
      />
    </div>
  );
}
