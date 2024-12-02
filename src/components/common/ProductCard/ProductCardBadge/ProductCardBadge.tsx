import Flash from '@src/assets/icons/card/flash.svg?react';

interface ProductCardBadgeProps {
  size?: 'lg' | 'sm';
}

export default function ProductCardBadge({
  size = 'sm',
}: ProductCardBadgeProps) {
  const badgeSize =
    size === 'lg'
      ? 'py-[5px] px-[10px] bg-primary text-[#FFE499] gap-[2px]'
      : 'absolute left-2 top-2 bg-white p-1 text-primary';
  const textSize =
    size === 'lg'
      ? 'text-sm text-white leading-4'
      : 'text-[10px] text-black leading-3';
  return (
    <div
      className={`flex item-center justify-center rounded-[32px] ${badgeSize}`}
    >
      <Flash {...(size === 'lg' && { width: 16, height: 16 })} />
      <span className={`font-bold ${textSize}`}>오늘배송</span>
    </div>
  );
}
