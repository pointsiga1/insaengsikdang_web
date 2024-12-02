import { Shop } from '@src/types/shop';
import ProductCardBadge from '../ProductCardBadge/ProductCardBadge';

interface ProductCardImageProps extends Pick<Shop, 'image' | 'depart_today'> {
  size: 'lg' | 'sm' | 'full';
}

export default function ProductCardImage({
  image,
  depart_today,
  size,
}: ProductCardImageProps) {
  const sizeClass =
    size === 'lg' ? 'w-[150px]' : size === 'sm' ? 'w-[106px]' : 'w-full';

  return (
    <div
      className={`relative aspect-square rounded-[10px] overflow-hidden flex-shrink-0 ${sizeClass}`}
    >
      <img
        className='w-full h-full object-cover'
        src={image || '/images/no_image.png'}
        alt='목데이터 이미지'
      />
      {depart_today && <ProductCardBadge />}
    </div>
  );
}
