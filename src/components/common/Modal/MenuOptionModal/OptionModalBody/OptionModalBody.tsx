import { Options } from '@src/types/menu/options';
import OptionModalOptionList from './OptionModalOptionList/OptionModalOptionList';

interface OptionModalBodyProps extends Pick<Options, 'option_groups'> {
  handleAddSelectItem: (id: number) => void;
}

export default function OptionModalBody({
  option_groups,
  handleAddSelectItem,
}: OptionModalBodyProps) {
  return (
    <div>
      <ul className='px-4'>
        {option_groups.map(options => {
          return (
            <OptionModalOptionList
              handleAddSelectItem={handleAddSelectItem}
              key={options.name}
              optionItem={options}
            />
          );
        })}
      </ul>
    </div>
  );
}
