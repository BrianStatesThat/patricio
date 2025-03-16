"use client"
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { assets } from '@/assets/assets';

function Navicons({isDarkMode}) {
     const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform =  'translateX(-16rem)'
    }

    const  closeMenu = () => {
        sideMenuRef.current.style.transform =  'translateX(16rem)'
    }

  return (
        <div className='fixed flex z-50 items-center justify-center gap-6 w-full bottom-0'>
            <ul className='flex w-full items-center gap-6 justify-center
            bg-white text-black font-Ovo text-lg 
            lg:gap-8 px-12 py-3 dark:bg-darkHover dark:text-white'>
                <li className='flex flex-row items-center gap-1'>
                    <a href="#top">
                    <Image src={isDarkMode? assets.home_dark : assets.home_light} alt='' 
                    className='w-max height-max '/>
                    <p>Home</p>
                    </a>
                </li>
                <li className='flex flex-row items-center gap-1'>
                    <a href="#about">
                    <Image src={isDarkMode? assets.region_dark : assets.region_light} alt='' 
                    className='w-max height-max '/>
                    <p>Locate</p>
                    </a>
                </li>
                <li className='flex flex-row items-center gap-1'>
                    <a href="#work">
                    <Image src={isDarkMode? assets.book_dark : assets.book_light} alt='' 
                    className='w-max height-max '/>
                    <p>Book</p>
                    
                    </a>
                </li>
                <li className='flex flex-row items-center gap-1'>
                    <button onClick={openMenu}>
                        <Image src={isDarkMode? assets.options_dark : assets.options_light} alt='' 
                        className='w-max height-max '/>
                        <p>More</p>
                    </button>
                </li>
            </ul>

            {/*---mobile--- menu*/}

            <ul ref={sideMenuRef}
            className='flex md:hidden flex-col gap-4 py-20
            px-10 fixed -right-64  top-0 bottom-0 w-64 z-50 h-screen
            bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
            >
                <div className='absolute right-6 top-6'
                onClick={closeMenu}
                >
                    <Image src={isDarkMode ? assets.close_white : assets.close_black } alt=''
                     className='w-5 cursor-pointer'
                     />
                </div>

                <li><a onClick={closeMenu}      href="#top">Home</a></li>
                <li><a onClick={closeMenu}      href="#about">About</a></li>
                <li><a onClick={closeMenu}      href="#services">Services</a></li>
                <li><a onClick={closeMenu}      href="#work">Projects</a></li>
                <li><a onClick={closeMenu}      href="#contact">Contact</a></li>
            </ul>

        </div>        
  )
}

export default Navicons;