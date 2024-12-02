import QuantityPlus from './QuantityPlus/QuantityPlus';
import QuantityMinus from './QuantityMinus/QuantityMinus';

interface QuantityButtonProps {
  quantity: number;
  handleMinusClick: () => void;
  handlePlusClick: () => void;
}

export default function QuantityButton({
  quantity,
  handleMinusClick,
  handlePlusClick,
}: QuantityButtonProps) {
  return (
    <div className='flex items-center justify-between px-5 border border-[#E8E8E8] h-[38px] w-full rounded-lg'>
      <QuantityMinus onClick={handleMinusClick} />
      <span className='block text-center w-6 font-extrabold text-primary'>
        {quantity}
      </span>
      <QuantityPlus onClick={handlePlusClick} />
    </div>
  );
}
