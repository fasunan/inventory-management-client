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
          className="mySwiper"
        >
          
          <SwiperSlide><img src="https://i.ibb.co/cvPNXkT/Logo.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ibb.co/kyTzRFg/icon.jpg" alt="" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Banner;