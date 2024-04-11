// BannerCard.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/effect-cards'; // Import Swiper cards effect CSS
import './BannerCard.css';
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
      
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default BannerCard;
