import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Allsongs.css'
import { useQuery } from '@tanstack/react-query';
import './Songs.css'
import { RexroxContexts } from '../../../MusicContext/MusicContexts';

const Songs = () => {
  const { setMusicfile } = useContext(RexroxContexts);
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
        className="mySwiper overflow-hidden  disable-text-selection  rounded-xl   "
      >
        {
          songs?.map((song, index) =>
            <SwiperSlide key={index} className='cursor-pointer overflow-hidden rounded-lg' >
              <div className=" group container   rounded-md  justify-center items-center  mx-auto  relative"><img className='rounded-lg shadow-lg  shadow-[#0000003b]' src={song.photo} alt="Shoes" />
                <div className="absolute z-10 opacity-0 group-hover:opacity-100  top-16 left-16">
                  <div className=" text-center">
                    <button onClick={() => setMusicfile(song)} className="text-center rounded-lg p-2 bg-white  text-gray-400 font-bold text-lg">Play</button>
                  </div>
                </div>
                <div className=" m-2">
                  <h2 className="text-[14px] font-bold ">
                    {song.title}
                  </h2>
                  <h2 className="font-semibold text-slate-500 text-sm">
                    {song.Artist}
                  </h2>

                </div>
                <div>
                </div>

              </div>


            </SwiperSlide>)
        }
      </Swiper >

    </div >
  );
};

export default Songs;