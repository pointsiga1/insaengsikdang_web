import { Link } from 'react-router-dom';
import ProductCardImage from './ProductCardImage/ProductCardImage';
import { Shop } from '@src/types/shop';
import ProductCardDetails from './ProductCardDetails/ProductCardDetails';

interface ProductCardProps {
  shop: Shop;
  size?: 'lg' | 'sm' | 'full';
  horizontal?: boolean;
}

export default function ProductCard({
  shop,
  horizontal = false,
  size = 'lg',
}: ProductCardProps) {
  const {
    pk,
    name,
    location,
    introduction,
    min_order_amount,
    depart_today,
    image,
  } = shop;

  const horizontalClass = horizontal
    ? 'flex flex-row items-start gap-3'
    : 'flex flex-col gap-2';

  return (
    <Link to={`/store/${pk}`} className={`${horizontalClass}`}>
      <ProductCardImage image={image} depart_today={depart_today} size={size} />
      <ProductCardDetails>
        <ProductCardDetails.Title>{name}</ProductCardDetails.Title>
        <ProductCardDetails.Introduction>
          {introduction}
        </ProductCardDetails.Introduction>
        <ProductCardDetails.Additional
          min_order_amount={min_order_amount}
          location={location}
        />
      </ProductCardDetails>
    </Link>
  );
}
