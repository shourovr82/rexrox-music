import React from 'react';
import AllSongs from './AllSongs/AllSongs';
import MostPlayed from './MostPlayed/MostPlayed';
import NowPlaying from './NowPlaying/NowPlaying';

const Home = () => {
  return (
    <div>
      <div className='px-5 '>
        <AllSongs></AllSongs>
      </div>

      <div className='grid grid-cols-7 gap-3  px-5'>
        <div className='col-span-3 '>
          <NowPlaying></NowPlaying>

        </div>
        <div className='col-span-4 border border-black'>

          <MostPlayed></MostPlayed>
        </div>
      </div>
    </div>

  );
};

export default Home;