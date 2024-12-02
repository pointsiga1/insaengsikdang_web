import { ReviewUser } from '@src/types/reviews';

export default function ReviewProfileImage({
  profile_img,
}: Pick<ReviewUser, 'profile_img'>) {
  return (
    <div className='w-11 h-11 overflow-hidden rounded-full'>
      <img
        className='w-full h-full object-cover'
        src={profile_img || '/images/no_image.png'}
      />
    </div>
  );
}
