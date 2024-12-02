import { ReviewItemProps } from '../ReviewCard';
import ReviewProfileImage from './ReviewProfileImage/ReviewProfileImage';
import ReviewProfileRate from './ReviewProfileRate/ReviewProfileRate';

export default function ReviewProfile({ reviewItem }: ReviewItemProps) {
  return (
    <div className='flex items-center gap-[10px]'>
      <ReviewProfileImage profile_img={reviewItem.user.profile_img} />
      <div>
        <div>
          <strong>{reviewItem.user.name}</strong>
          <div className='flex items-center gap-2'>
            <ReviewProfileRate stars={reviewItem.stars} />
            <div className='w-[1px] h-[10px] bg-[#aaaaaa]'></div>
            <p className='text-[#898989] text-xs'>{reviewItem.menu}</p>
            <p className='text-primary text-xs'>
              {reviewItem.purchase_count}번째 구매
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
