// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const EachProjectSlide = ({images}) => {
  console.log(images);
    return (
        <div>
             <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 20,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='w-[400px]' src={images?.img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src={images?.img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src={images?.img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src={images?.img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src={images?.img5} />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default EachProjectSlide;