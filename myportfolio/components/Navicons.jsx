import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

function Navicons({isDarkMode}) {
  return (
        <div className='fixed flex z-50 items-center justify-center gap-6 w-full bottom-0'>
            <ul className='flex w-full items-center gap-6 justify-center
            bg-white text-black font-Ovo text-lg 
            lg:gap-8 px-12 py-3 dark:bg-darkHover dark:text-white'>
                <li>
                    <a href="#top">
                    <Image src={isDarkMode? assets.home_dark : assets.home_light} alt='' 
                    className='w-max height-max '/>
                    <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href="#about">
                    <Image src={isDarkMode? assets.region_dark : assets.region_light} alt='' 
                    className='w-max height-max '/>
                    <p>Locate</p>
                    </a>
                </li>
                <li>
                    <a href="#work">
                    <Image src={isDarkMode? assets.book_dark : assets.book_light} alt='' 
                    className='w-max height-max '/>
                    <p>Booking</p>
                    
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    <Image src={isDarkMode? assets.options_dark : assets.options_light} alt='' 
                    className='w-max height-max '/>
                    <p>More</p>
                    </a>
                </li>
            </ul>
        </div>        
  )
}

export default Navicons;