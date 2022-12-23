import React from 'react';
import './Allsongs.css'
import Songs from './Songs';



const AllSongs = () => {


  return (
    <div className='py-3'>
      <div>
        <div className='flex items-center gap-4'>
          <h2 className='text-xl font-bold'>All Songs</h2>
          <span className='text-slate-400 font-semibold text-xs'>- Total 500+</span>
        </div>
        <div>

          <div className='w-full '>
            <Songs></Songs>
          </div>

        </div >









      </div>

    </div >
  );
};

export default AllSongs;