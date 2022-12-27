import React from 'react';
import { SwiperSlide } from 'swiper/react';

const SingleSong = ({ song }) => {
  console.log(song);
  return (

    <SwiperSlide className='shadow-2xl' > Slide 1</SwiperSlide>
  );
};

export default SingleSong;