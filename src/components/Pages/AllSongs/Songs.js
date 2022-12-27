import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Allsongs.css'
import { useQuery } from '@tanstack/react-query';

const Songs = () => {

  const { isLoading, error, data: songs } = useQuery({
    queryKey: ['allsongs'],
    queryFn: () =>
      fetch('http://localhost:8080/allsongs').then(res =>
        res.json()
      )
  })





  return (
    <div className='relative p-2 rounded-lg ' >
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper overflow-hidden  disable-text-selection  rounded-lg   "
      >
        {
          songs?.map((song, index) =>
            <SwiperSlide key={index} className='cursor-pointer overflow-hidden rounded-lg' >
              <div className="bg-base-100">
                <figure className='shadow-xl rounded-xl' ><img className='rounded-lg' src={song.photo} alt="Shoes" /></figure>
                <div className=" mt-3">
                  <h2 className="text-sm font-bold ">
                    {song.title}
                  </h2>
                  <h2 className="font-semibold text-slate-500 text-sm">
                    {song.Artist}
                  </h2>

                </div>
              </div>
            </SwiperSlide>)
        }
      </Swiper >

    </div >
  );
};

export default Songs;