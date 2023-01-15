import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

export default function Slider({ apartments }) {
  return (
    <>
      <div className="container-fluid">
        <Swiper
          spaceBetween={16}
          centeredSlides={true}
          pagination={{
            type: 'fraction',
          }}
          //  autoplay={{
          //delay: 2500,
          //disableOnInteraction: false,
          // }}

          // import required modules  navigation={true}
          modules={[Navigation, Pagination]}
          className=" mySwiper swiper-nav-onhover w-100"
        >
          <SwiperSlide className="swiper w-100">
            <img src={apartments.image} alt="mls" className="image w-100" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={apartments.image1} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={apartments.image2} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={apartments.image3} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={apartments.image4} className="image w-100" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
