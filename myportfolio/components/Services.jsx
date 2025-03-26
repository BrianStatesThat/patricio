import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] scroll-mt-20 pt-[64px] pb-[20px]'>
        <h4 className='text-center mb-2 text-4xl font-Ovo'>See how we can help you</h4>
        <h2 className='text-center text-lg font-Ovo'>Feel the pulse of the iKasi, served up quick and real.</h2>
        <div className='grid sm:grid-cols-auto md:grid-cols-4  gap-6 my-10 '>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index}
            className='border border-gray-400 rounded-lg px-8 py-12
             hover:shadow-black cursor-pointer hover:bg-lightHover 
             hover:-translate-y-1 duration-500 
             dark:hover:bg-darkHover dark:hover:shadow-white '>
              <Image src={icon} alt='' className='flex flex-col items-center justify-center mx-auto w-10' />
              <h2 className='font-regular text-4xl my-4 text-gray-700 dark:text-white text-center'>{title}</h2>
              <p className='font-regular max-w-2x mx-auto pt-5 px-1 text-gray-600 leading-5 dark:text-white/80 text-center'>
                {description}
              </p>
              <Link href={link} className='flex flex-col items-center justify-center mx-auto'>
                <p className='font-regular text-center'>MORE</p> 
                <Image src={assets.right_arrow} alt='' className='flex flex-col items-center justify-center mx-auto w-4'/>
              </Link>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services;