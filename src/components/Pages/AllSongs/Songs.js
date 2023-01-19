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
import { IoPlay } from 'react-icons/io5';

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
    <div className='  relative p-2 rounded-lg ' >

      <Swiper
        slidesPerView={6}
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
        className="mySwiper overflow-hidden disable-text-selection  rounded-xl   "
      >
        {
          songs?.map((song, index) =>
            <SwiperSlide key={index} className='cursor-pointer overflow-hidden rounded-lg flex-col ' >
              <>
                {/* Song Thumbnail */}
                <div class="flex items-center justify-center rounded-2xl">
                  <div class="relative block  hover:bg-black rounded-2xl group"
                  >
                    <img class="absolute  rounded-2xl inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                      src={song?.photo} />
                    <div class="relative p-5">
                      <div class="">
                        <div class="transition-all w-full  transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                          <div class="p-2 justify-center flex  flex-col items-center text-center">
                            <p class=" text-white text-sm xs">
                              {song?.title}
                            </p>
                            {/* play button */}
                            <button onClick={() => setMusicfile(song)} class="px-4 py-2 mt-4 text-sm 
                                            text-white  border ">
                              <IoPlay className='text-xl' />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* song title */}
                <div>
                  <p className='text-sm break-words '>{song?.title}</p>
                </div>
              </>

            </SwiperSlide>)
        }
      </Swiper >

    </div >
  );
};

export default Songs;