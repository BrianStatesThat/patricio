import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto lg:pt-16
    h-screen flex flex-col items-center justify-center gap-4'>
      <div className=' pt-32' >
      <Image src={assets.profile_img} alt=''
      className='rounded-full w-32 h-32 object-cover mt-3'/>
      </div>
      <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-O' >
        Hello! I'm Mandilakhe Brian Speelman
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Front-End Web Developer based in Gqeberha
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
      Welcome to my portfolio! I specialize in creating intuitive, responsive websites with a strong focus on clean design and user experience. With a detail-oriented approach rooted in my background in IT, I'm passionate about transforming ideas into functional, engaging digital solutions. Let's collaborate and make something great!
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="/sample-resume.pdf" download 
        className='px-10 py-3 border rounded-full border-gray-500
        flex items-center gap-2 bg-white dark:text-black'>
          my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
      </div>
    </div>
    
  )
}

export default Header;