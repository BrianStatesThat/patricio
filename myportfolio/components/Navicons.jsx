import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

function Navicons({isDarkMode}) {
  return (
        <div className='fixed flex z-50 items-center justify-center gap-6 w-full bottom-0'>
            <ul className='flex w-full items-center gap-6 justify-center
            bg-white text-black font-Ovo text-lg 
            lg:gap-8 rounded-full px-12 py-3 dark:bg-darkHover dark:text-white'>
                <li><a href="#top">
                    <Image src={isDarkMode? assets.home_dark : assets.home_light} alt='' className='w-6'/>
                    Home
                </a></li>
                <li><a href="#about">Locate</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">VIP Booking</a></li>
                <li><a href="#contact">More</a></li>
            </ul>
        </div>        
  )
}

export default Navicons;