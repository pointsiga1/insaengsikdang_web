import Checkbox from '@components/common/Checkbox/Checkbox';
import { OptionItem } from '@src/types/menu/options';
import { useState } from 'react';

interface OptionModalOptionItemProps extends OptionItem {
  handleAddSelectItem: (id: number) => void;
}

export default function OptionModalOptionItem({
  pk,
  name,
  price,
  handleAddSelectItem,
}: OptionModalOptionItemProps) {
  const [selectedValues, setSelectedValues] = useState<(number | string)[]>([]);

  const handleCheckboxChange = (checked: boolean) => {
    setSelectedValues(prevValues =>
      checked ? [...prevValues, pk] : prevValues.filter(value => value !== pk)
    );
    handleAddSelectItem(pk);
  };
  return (
    <li className='flex justify-between items-center'>
      <Checkbox
        value={selectedValues}
        pk={pk}
        handleChange={handleCheckboxChange}
        weight='normal'
      >
        {name}
      </Checkbox>
      <span className='font-bold text-secondary'>
        +{price.toLocaleString()}원
      </span>
    </li>
  );
}
