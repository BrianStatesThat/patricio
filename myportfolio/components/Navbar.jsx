"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import React from 'react';



const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
          if(scrollY > 50){
            setIsScroll(true)
          } else {
            setIsScroll(false)
          } 
        })
    }, [])

  return (
    <>
        <div className='fixed right-0 w-11/12 -z-10 translate-y-[-80%]
         dark:hidden overflow-y-hidden'>
            <Image src={assets.header_bg_color} alt='' className='w-fit' />
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
       md:max-h-20 h-16
        flex items-center justify-between z-50
         ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20": ""}`}>

            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                    <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
            </button>
            
            <a href="#top">
                <Image 
                src={isDarkMode ? assets.logo_dark : assets.logo}
                alt='logo'
                className='w-28 cursor-pointer p-0' />
            </a>

            <div className='flex items-center gap-4'>

                <a href="#contact" className='hidden lg:flex items-center gap-3
                px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
                dark:border-white/50
                '>
                    Contact 
                    <Image 
                    src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                    className='w-6'
                    alt='arrow' />
                </a>

                <button className='block right-0 mx-0 w-[30px] h-[30px]'
                >
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-[30px] h-[30px]'/>
                </button>
        
            
            </div>
        </nav>
    </>
  )
}

export default Navbar;