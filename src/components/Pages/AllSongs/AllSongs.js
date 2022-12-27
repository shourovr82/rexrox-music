import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './Allsongs.css'
import Songs from './Songs';



const AllSongs = () => {
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


  return (
    <div className='py-3'>
      <div>
        <div className='flex items-center gap-4'>
          <h2 className='text-xl font-bold'>All Songs</h2>
          <span className='text-slate-400 font-semibold text-xs'> {songs?.length && `- Total ${songs?.length}`}+</span>
        </div>
        <div>

          {/*  all songs page */}

          <div className='w-full '>
            <Songs></Songs>
          </div>
        </div >

      </div>

    </div >
  );
};

export default AllSongs;