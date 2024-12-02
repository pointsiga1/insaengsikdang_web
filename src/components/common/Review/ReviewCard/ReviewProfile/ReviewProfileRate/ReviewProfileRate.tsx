import Rate from 'rc-rate';
import Star from '@assets/icons/store/star.svg?react';
import { ReviewItem } from '@src/types/reviews';

export default function ReviewProfileRate({
  stars,
}: Pick<ReviewItem, 'stars'>) {
  return (
    <div id='review_rate' className='flex items-center gap-1'>
      <Rate
        allowHalf
        value={stars}
        disabled
        character={<Star width={12} height={12} />}
      />
      <p className='font-bold text-xs'>{stars}</p>
    </div>
  );
}
