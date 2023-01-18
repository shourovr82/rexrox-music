import React from 'react';
import { HiViewGridAdd } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsNone } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';


const Navbar = () => {
  return (


    <header aria-label="Site Header" className="shadow-sm  border-b-2 ">
      <div
        className="mx-auto  flex py-2 w-11/12  items-center justify-between  "
      >
        {/*  nav left */}
        <div className='flex  justify-center  items-center gap-6'>

          <div>
            <button className='text-xl'><HiViewGridAdd /></button>
          </div>

          <form>
            <div className="flex  shadow-md items-center gap-4">
              <div>
                <div className='max-w-md mx-auto'>
                  <div className="relative flex items-center w-full py-2 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">

                      <BsSearch className='text-red-900 text-2xl' />
                    </div>

                    <input
                      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search something.." />
                  </div>
                </div>


              </div>


            </div>
          </form>
          {/*  hamburger button */}
          <div className="flex w-0 flex-1 lg:hidden">
            <button className="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
              <span className="sr-only">Account</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>

        </div>


        {/*  nav right */}

        <div>
          {/* for mobile */}
          <div className="flex w-0 flex-1 justify-end lg:hidden">
            <button className="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
              <span className="sr-only">Menu</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* for desktop */}
          <div className="hidden  items-center gap-4  lg:flex">

            <div className='flex justify-center items-center gap-3  border-r-2 pr-4 border-slate-400'>
              <div>
                <h2 className=''><CgProfile className='text-2xl ' /></h2>
              </div>
              <div className="dropdown dropdown-hover">

                <label tabIndex={0} className="flex justify-center items-center gap-2 m-1">Profile <FiChevronDown className='border border-slate-400 rounded-full text-xl' /> </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>User Name </li>
                  <li>Item 2</li>
                </ul>
              </div>
            </div>

            {/*  notification and settings */}
            <div className=' flex items-center gap-2 border-black'>
              <button>
                <MdNotificationsNone className='text-2xl ' />
              </button>
              <button>
                <FiSettings className='text-2xl ' />
              </button>

            </div>

          </div>


        </div>





      </div>


      <div className="border-t border-gray-100 lg:hidden">
        <nav
          className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
        >
          <a className="flex-shrink-0 pl-4 text-gray-900" href="/">About</a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="/">Blog</a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="/">Projects</a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="/">Contact</a>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;