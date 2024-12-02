import { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { AddressData } from '@components/common/AddressInfo/AddressSearch/AddressSearchModal/AddressSearchModal';
import AddressSearch from '@components/common/AddressInfo/AddressSearch/AddressSearch';

interface AddressInputProps {
  preName?: string;
  message: string;
}

export default function AddressInput({
  preName,
  message,
  children,
}: PropsWithChildren<AddressInputProps>) {
  const {
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();

  const addressName = preName ? `${preName}.address` : 'address';
  const zipCodeName = preName ? `${preName}.zip_code` : 'zip_code';

  const handeSearchAddress = (data: AddressData) => {
    setValue(addressName, data.address);
    setValue(zipCodeName, data.zonecode);
  };

  return (
    <label className='flex flex-col w-full'>
      <span className={`font-normal mb-1 text-sm text-secondary`}>
        {children}
      </span>
      <div className='flex gap-2'>
        <input
          disabled
          className='px-2 rounded-md border-none w-[100%] h-[40px] bg-[#f1f1f1]'
          value={watch(addressName)}
        />
        <AddressSearch handeSearchAddress={data => handeSearchAddress(data)} />
      </div>
      <input disabled type='hidden' value={watch(zipCodeName)} />
      {errors[addressName]?.type === 'required' && (
        <p role='alert'>{message}</p>
      )}
    </label>
  );
}
