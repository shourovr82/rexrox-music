import React, { useContext, useState } from 'react';
import { RexroxContexts } from '../../../MusicContext/MusicContexts';
import './nowplaying.css';
import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import { FaPause, FaPlay } from 'react-icons/fa';
import playbutton from '../../../Photos/114093-play-and-pause.json'

const NowPlaying = () => {
  const { musicFile, setMusicfile } = useContext(RexroxContexts);
  const [play, setPlay] = useState(false);



  return (


    <div className="player-container p-2">
      <div className="img-container flex justify-center">
        <img src={musicFile.photo} alt="Album Art" />
      </div>
      <div className='flex justify-center mt-3'>
        <div>
          <h2 id="title">{musicFile?.title}</h2>
          <h3 id="artist">{musicFile?.Artist}</h3>
        </div>
      </div>
      <audio src={`${musicFile?.link}`} ></audio>
      <div className="progress-container" id="progress-container">
        <div className="progress" id="progress"></div>
        <div className="duration-wrapper">
          <span id="current-time">0:30</span>
          <span id="duration">2:06</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <span><GiPreviousButton /></span>

        <div className="containers">
          <div className="rounded-full  mx-auto  bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <button onClick={() => setPlay(!play)}
              className={`transition-all playbtn bg-white  ${!play ? 'actives ' : 'move'}`}
            >
              {play ?
                <FaPlay className='z-10  playicon text-indigo-600' />
                :
                <FaPause className='z-10  text-white pauseicon ' />
              }


            </button>
          </div>

        </div>
        <span><GiNextButton /></span>
      </div>
    </div>


  );
};

export default NowPlaying;