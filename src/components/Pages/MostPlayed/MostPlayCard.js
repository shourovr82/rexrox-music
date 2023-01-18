import React from 'react';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { SiAudiomack } from 'react-icons/si';

const MostPlayCard = () => {
  return (
    <div className=''>
      <div className='flex border border-[#44444418] shadow-md py-2 rounded-md shadow-[#44444459] justify-between px-4 items-center'>
        <div className='flex gap-3 items-center'>
          <h2>01</h2>
          <img className='w-10 ' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        </div>
        <div className='flex items-center gap-3'>
          <span><IoArrowRedoOutline /></span>
          <h4 className='font-semibold'>Rockstar</h4>
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

export default MostPlayCard; <div className='flex shadow-2xl py-2 rounded-xl shadow-black justify-between px-4 items-center'>
  <div className='flex gap-3 items-center'>
    <h2>01</h2>
    <img className='w-10 ' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
  </div>
  <div className='flex items-center gap-3'>
    <span><IoArrowRedoOutline /></span>
    <h4 className='font-semibold'>Rockstar</h4>
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