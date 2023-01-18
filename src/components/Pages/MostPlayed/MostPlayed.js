import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';
import { SiAudiomack } from 'react-icons/si';
import { IoArrowRedoOutline } from 'react-icons/io5';
import MostPlayCard from './MostPlayCard';

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
      <div className='flex flex-col gap-4 overflow-scroll  h-[35vh] scrolls-s px-10'>

        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
        <MostPlayCard />
      </div>

    </div>
  );
};

export default MostPlayed;