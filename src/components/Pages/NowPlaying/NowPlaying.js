import React, { useContext } from 'react';
import { RexroxContexts } from '../../../MusicContext/MusicContexts';

const NowPlaying = () => {
  const { musicFile, setMusicfile } = useContext(RexroxContexts);
  console.log(musicFile);
  return (
    <div className='border rounded-lg p-3 bg-white shadow-lg shadow-black h-full'>
      <div className='flex py-2 justify-center items-center'>
        <img className='w-28 rounded-2xl shadow-xl shadow-slate-400' src="https://i.postimg.cc/0yh60gKV/image.png" alt="" />
      </div>
      <div className='flex justify-center text-center'>
        <div>
          <h2 className='text-sm font-bold'>Saint-Tropex</h2>
          <p className='text-xs font-semibold text-slate-400'>Post Melone</p>
        </div>
      </div>
      <div>
        <audio controls autoPlay src={musicFile && musicFile.link}></audio>
      </div>
    </div>
  );
};

export default NowPlaying;