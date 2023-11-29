// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {

  return (
    <div>
      <div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper h-[600px]"
          >
            <SwiperSlide><img src="https://i.ibb.co/kyTzRFg/icon.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/Jx5WpVF/banner-2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/TPCVBQP/banner-3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/4Fh749x/banner5.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/TTDdwFN/banner-4.jpg" alt="" /></SwiperSlide>

          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Banner;