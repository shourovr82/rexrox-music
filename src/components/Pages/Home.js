import React from 'react';
import AllSongs from './AllSongs/AllSongs';
import MostPlayed from './MostPlayed/MostPlayed';
import NowPlaying from './NowPlaying/NowPlaying';

const Home = () => {
  return (
    <div>

      {/*  All Songs with carousel */}
      <div className='px-5 '>
        <AllSongs></AllSongs>
      </div>
      {/*  All Songs with carousel End*/}


      <div className='grid grid-cols-7 gap-5  px-5'>

        {/*  Now Playing section start */}
        <div className='col-span-3'>
          <NowPlaying></NowPlaying>
        </div>
        {/*  Now Playing section End*/}


        {/*  Most Played Songs with list section Start*/}
        <div className='col-span-4 h-full  '>
          <MostPlayed></MostPlayed>
        </div>
        {/*  Most Played Songs End*/}

      </div>
    </div>

  );
};

export default Home;