import { ReviewItem } from '@src/types/reviews';
import { dateFormat } from '@src/utils/dateFormat';
import ReviewProfile from './ReviewProfile/ReviewProfile';
import ReviewImage from './ReviewImage/ReviewImage';
import ReviewReply from './ReviewReply/ReviewReply';
import Button from '@components/common/Button/Button';

export interface ReviewItemProps {
  reviewItem: ReviewItem;
  showFunctionBtns?: Boolean;
}

export default function ReviewCard({ reviewItem, showFunctionBtns }: ReviewItemProps) {
  return (
    <li className='py-[26px] px-4 border-t border-[#f3f3f3]'>
      <ReviewProfile reviewItem={reviewItem} />
      <p className='text-xs pt-5'>{reviewItem.body}</p>
      <ReviewImage images={reviewItem.images} pk={reviewItem.pk} />
      <div className='flex flex-row items-center justify-between mt-[18px]'>
        <span className='text-[#898989] text-xs'>
          {dateFormat(reviewItem.created_at)}
        </span>
        {showFunctionBtns &&
          <div className='flex flex-row gap-x-[6px]'>
            <div className='w-[45px]'>
              <Button height={29} fontSize='sm'>
                수정
              </Button>
            </div>
            <div className='w-[45px]'>
              <Button variant='primary-outline' height={29} fontSize='sm'>
                삭제
              </Button>
            </div>
          </div>
        }
      </div>
      {reviewItem.reply && <ReviewReply reply={reviewItem.reply} />}
    </li>
  );
}
