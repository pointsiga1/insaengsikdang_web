import Image from '@components/common/Image/Image';
import { ReviewItem } from '@src/types/reviews';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ReviewImage({
  images,
  pk,
}: Pick<ReviewItem, 'images' | 'pk'>) {
  return (
    images.length > 0 && (
      <Swiper className='mt-[18px]' slidesPerView={'auto'} spaceBetween={10}>
        {images.map((image, index) => {
          return (
            <SwiperSlide className='aspect-square w-20 h-20' key={index}>
              <Link to={`/store/review/${pk}`}>
                <Image src={image} rounded='sm' />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
}
