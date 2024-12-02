import SwiperPagination from '@components/common/SwiperPagination/SwiperPagination';
import { Images } from '@src/types/store';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ImageSwiper({ images }: Images) {
  return (
    <section className='relative'>
      <Swiper
        className='h-[430px] w-full object-cover'
        modules={[Pagination]}
        pagination={{ clickable: true, el: '.image-pagination' }}
        slidesPerView={1}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img className='h-[430px] w-full object-cover' src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='absolute bottom-4 left-0 z-[5] w-full'>
        <SwiperPagination className='image-pagination' />
      </div>
    </section>
  );
}
