import React from 'react';

function Navicons() {
  return (
        <div className='fixed flex z-50 items-center justify-center gap-6 w-full bottom-1'>
            <ul className='flex w-full items-center gap-6 justify-center
            bg-white/50 text-black font-Ovo text-lg 
            lg:gap-8 rounded-full px-12 py-3 dark:bg-darkHover dark:text-white'>
                <li><a href="#top">Home</a></li>
                <li><a href="#about">Locate</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">VIP Booking</a></li>
                <li><a href="#contact">More</a></li>
            </ul>
        </div>        
  )
}

export default Navicons;