"use client"
import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { assets } from '@/assets/assets';
import Link from 'next/link';

function Navicons({isDarkMode}) {
     const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform =  'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform =  'translateX(16rem)'
    }

    return (
        <div className='w-full fixed flex z-50 items-center justify-between gap-6 bottom-0 overflow-x-hidden'>
            <ul className='flex w-full items-center gap-6 justify-between
            bg-white text-black font-Ovo text-lg 
            lg:gap-8 px-8 py-3 dark:bg-darkHover dark:text-white'>
              <li className='flex flex-col items-center justify-between gap-1 h-[60px] '>
                    <Link href="/">
                    <Image src={isDarkMode? assets.homedark : assets.homelight} alt='' 
                    className='w-8 h-8 flex items-center justify-center '/>
                    <p className='text-center w-8 h-8 flex items-center justify-center'>Home</p>
                    </Link>
                </li>
              <li className='flex flex-col items-center justify-between gap-1 h-[60px]'>
                    <Link href="/locate">
                    <Image src={isDarkMode? assets.locatedark : assets.locatelight} alt='' 
                    className='w-8 h-8 flex items-center justify-center'/>
                    <p className='font-regular text-center w-8 h-8 flex items-center justify-center' >Locate</p>
                    </Link>
                </li>
                <li className='flex flex-col items-center justify-between  gap-1 h-[60px]'>
                    <Link href="/book">
                    <Image src={isDarkMode? assets.bookdark : assets.booklight} alt=''
                    className='w-8 h-8 flex items-center justify-center'/>
                    <p className='font-regular text-center w-8 h-8 flex items-center justify-center'>Book</p>
                    </Link>
                </li>
                <li className='flex flex-col items-center justify-between gap-1 h-[60px]'>
                    <button onClick={openMenu}>
                        <Image src={isDarkMode? assets.menudark : assets.menulight} alt='' 
                        className='w-8 h-8 flex items-center justify-center'/>
                        <p className='font-regular text-center w-8 h-8 flex items-center justify-center'>More</p>
                    </button>
                </li>
            </ul>

            {/*---mobile--- menu*/}

            <ul ref={sideMenuRef}
            className='flex flex-col gap-4 py-20
            px-10 fixed -right-64  top-0 bottom-0 w-64 z-50 h-screen
            bg-darkHover/70 backdrop-blur-md transition duration-500 text-white dark:bg-darkHover/70 dark:backdrop-blur-md dark:bg-darkHover dark:text-white'
            >
                <div className='absolute right-6 top-6'
                onClick={closeMenu}
                >
                    <Image src={isDarkMode ? assets.close_white : assets.close_black } alt=''
                     className='w-5 cursor-pointer'
                     />
                </div>

                <li>
                    <Link onClick={closeMenu} href="/services" className="py-5 font-bold text-xl ">
                        Services Catalogue
                    </Link>
                </li>
                <li><a className="py-5 font-bold text-xl " onClick={closeMenu} href="#about">Our Story</a></li>
                <li><a className="py-5 font-bold text-xl " onClick={closeMenu} href="#services">Academy</a></li>
                <li>
                    <a className="py-5 font-bold text-xl " onClick={closeMenu} href="#top">
                        Own-A-Franchise
                    </a>
                </li>
                <li>
                    <Link className="py-5 font-bold text-xl " onClick={closeMenu} href='/contact'>
                        Contact Us
                    </Link>
                </li>
            </ul>

        </div>        
  )
}

export default Navicons;