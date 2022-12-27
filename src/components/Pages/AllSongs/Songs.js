import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Allsongs.css'
import { useQuery } from '@tanstack/react-query';
import SingleSong from './SingleSong';

const Songs = () => {

  const { isLoading, error, data: songs } = useQuery({
    queryKey: ['allsongs'],
    queryFn: () =>
      fetch('http://localhost:8080/allsongs').then(res =>
        res.json()
      )
  })

  if (isLoading) {
    console.log('laoding')
  }


  if (songs) {
    console.log(songs)
  }

  return (
    <div className='relative border mt-4' >
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          songs?.map((song, index) =>
            <SwiperSlide key={index} className='shadow-2xl cursor-pointer' >
              <div>
                <h2>{song.title}</h2>
              </div>

            </SwiperSlide>)
        }
      </Swiper >
    </div >
  );
};

export default Songs;