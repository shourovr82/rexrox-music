import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { SiAudiomack } from 'react-icons/si';
import { IoArrowRedoOutline } from 'react-icons/io5';

const MostPlayed = () => {
  return (
    <div className=' '>
      <div className='flex mb-3 justify-between'>
        <h1 className='flex items-center gap-3'> <span className='text-xl font-bold'>Mostly Played</span> <GiSelfLove className='text-red-700 text-lg ' /> </h1>
        <div className=''>
          <p className='flex items-center gap-3 text-slate-400 text-sm font-semibold'>12 songs on the list <span className='border p-0.5 rounded-md '><RiNeteaseCloudMusicLine className='text-lg' /></span>  </p>
        </div>
      </div>
      {/*  mostly played list song */}
      <div className='flex justify-between px-4 items-center'>
        <div className='flex gap-3 items-center'>
          <h2>01</h2>
          <img className='w-10 border' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <div className='flex items-center gap-3'>
          <span><IoArrowRedoOutline /></span>
          <h4>Rockstar</h4>
        </div>
        <div>
          <p>Post Malone</p>
        </div>
        <div>
          <p>4.31</p>
        </div>
        <div>
          <span>
            <SiAudiomack />
          </span>
        </div>
      </div>

    </div>
  );
};

export default MostPlayed;