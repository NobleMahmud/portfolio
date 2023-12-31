import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
const ProjectsSlide = () => {
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
          <img className='w-[400px]' src="https://i.ibb.co/PwxnxGh/home-Banner-I.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src="https://i.ibb.co/xJ7NNJ5/homeH.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src="https://i.ibb.co/RgD85xd/homeC.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src="https://i.ibb.co/6tQfTfX/meal-Details-H.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-[400px]' src="https://i.ibb.co/cF05wfM/productI.png" />
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default ProjectsSlide;