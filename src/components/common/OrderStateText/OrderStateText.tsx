interface OrderStateTextProps {
  state: string;
  deliveredDate?: string;
}

export default function OrderStateText({
  state,
  deliveredDate,
}: OrderStateTextProps) {
  return (
    <span
      className={
        state === '배송완료'
          ? 'text-[#3EBB58] text-[12px] font-bold'
          : 'text-[#898989] text-[12px] font-bold'
      }
    >
      {state}
      {state === '배송완료' && deliveredDate && (
        <span className='ml-[8px] font-normal'>{deliveredDate}</span>
      )}
    </span>
  );
}
