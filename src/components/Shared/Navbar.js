import React from 'react';
import { HiViewGridAdd } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdNotificationsNone } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';


const Navbar = () => {
  return (

    <header aria-label="Site Header" class="shadow-sm border-b-2 ">
      <div
        class="mx-auto  flex py-4 w-11/12 items-center justify-between  "
      >
        {/*  nav left */}
        <div className='flex justify-center items-center gap-6'>

          <div>
            <button className='text-xl'><HiViewGridAdd /></button>
          </div>

          <form>
            <div class="flex shadow-md items-center gap-4">
              <div>
                <div class='max-w-md mx-auto'>
                  <div class="relative flex items-center w-full py-2 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div class="grid place-items-center h-full w-12 text-gray-300">

                      <BsSearch className='text-red-500' />
                    </div>

                    <input
                      class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                      type="text"
                      id="search"
                      placeholder="Search something.." />
                  </div>
                </div>


              </div>


            </div>
          </form>
          {/*  hamburger button */}
          <div class="flex w-0 flex-1 lg:hidden">
            <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
              <span class="sr-only">Account</span>
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>

        </div>


        {/*  nav right */}

        <div>
          <div class="flex w-0 flex-1 justify-end lg:hidden">
            <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
              <span class="sr-only">Menu</span>
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div class="hidden items-center gap-4  lg:flex">

            <div className='flex justify-center items-center gap-3  border-r-2 pr-4 border-slate-400'>
              <div>
                <h2 className=''><CgProfile className='text-2xl ' /></h2>
              </div>
              <div className="dropdown dropdown-hover">

                <label tabIndex={0} className="flex justify-center items-center gap-2 m-1">Profile <FiChevronDown className='border border-slate-400 rounded-full text-xl' /> </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
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



        {/* <nav
            aria-label="Site Nav"
            class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
          >
            <a class="text-gray-900" href="">About</a>
            <a class="text-gray-900" href="">Blog</a>
            <a class="text-gray-900" href="">Projects</a>
            <a class="text-gray-900" href="">Contact</a>
          </nav> */}


      </div>

      <div class="border-t border-gray-100 lg:hidden">
        <nav
          class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
        >
          <a class="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="">Blog</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="">Projects</a>
          <a class="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;