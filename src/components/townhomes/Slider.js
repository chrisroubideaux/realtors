// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

export default function Slider({ townhomes }) {
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
            <img src={townhomes.image} alt="mls" className="image w-100" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={townhomes.image1} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={townhomes.image2} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={townhomes.image3} className="image w-100" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <img src={townhomes.image4} className="image w-100" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
