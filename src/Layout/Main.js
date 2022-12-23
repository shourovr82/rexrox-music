import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import { GoHome } from 'react-icons/go';
import { MdOutlineQueueMusic, MdPeopleAlt, MdReplay } from 'react-icons/md';
import { AiFillFolderOpen, AiOutlineVideoCamera } from 'react-icons/ai';
import { ImFileMusic } from 'react-icons/im';


const Main = () => {
  return (
    <div>
      <div className=''>
        {/*  */}
        <div className='md:grid lg:grid-cols-6 md:grid-cols-4'>
          {/* left side bar */}
          <div className='lg:col-span-1  h-[100vh] bg-white shadow-2xl'>
            {/* left sidebar */}
            <div className="px-4 py-6">
              <span className="block py-2 bg-gray-400 rounded-lg">REXROX</span>

              <nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                >
                  <GoHome />

                  <span className="ml-3 text-sm font-medium"> Home </span>
                </Link>
                <Link
                  to="/browse"
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                >
                  <MdOutlineQueueMusic className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Browse </span>
                </Link>

                {/* <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700"
                  >
                    <MdOutlineQueueMusic className='text-lg' />

                    <span className="ml-3 text-sm font-medium"> Browse </span>

                    <span
                      className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>


                </details> */}

                <Link
                  to="/albums"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <ImFileMusic className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Album </span>
                </Link>


                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <MdPeopleAlt className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Artists </span>
                </a>

                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiOutlineVideoCamera className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Videos </span>
                </a>

              </nav>


              {/* my music */}

              <nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
                <h2 className='px-4 font-semibold uppercase text-slate-400'>My Music</h2>


                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <MdReplay className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Recently Played </span>
                </a>


                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <AiFillFolderOpen className='text-lg' />

                  <span className="ml-3 text-sm font-medium"> Local Files </span>
                </a>
              </nav>
              {/* Play List */}

              <nav aria-label="Main Nav" className="flex flex-col mt-6 space-y-1">
                <h2 className='px-4 font-semibold uppercase text-slate-400'>Play List</h2>


                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> General Playlist</span>
                </a>
                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Ease Up Beats</span>
                </a>
                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Pop Songs</span>
                </a>
                <a
                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Mood Swings</span>
                </a>



              </nav>

            </div>



          </div>
          <div className='lg:col-span-5 col-span-3 '>
            <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
        </div>


      </div>




    </div>
  );
};

export default Main;