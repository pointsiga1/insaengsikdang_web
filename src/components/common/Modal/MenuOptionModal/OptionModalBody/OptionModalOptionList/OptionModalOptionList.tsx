import { OptionGroup } from '@src/types/menu/options';
import OptionModalOptionItem from './OptionModalOptionItem/OptionModalOptionItem';

interface OptionModalOptionListProps {
  optionItem: OptionGroup;
  handleAddSelectItem: (id: number) => void;
}

export default function OptionModalOptionList({
  optionItem,
  handleAddSelectItem,
}: OptionModalOptionListProps) {
  return (
    <li className='mb-5'>
      <strong className='block mb-[10px]'>{optionItem.name}</strong>
      <ul className='flex flex-col gap-4'>
        {optionItem.options.map(({ pk, name, price }) => {
          return (
            <OptionModalOptionItem
              key={pk}
              handleAddSelectItem={handleAddSelectItem}
              pk={pk}
              name={name}
              price={price}
            />
          );
        })}
      </ul>
    </li>
  );
}
