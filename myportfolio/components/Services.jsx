import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Haircuts and Styles</h4>
        <h2 className='text-center text-5xl font-Ovo'>See our unique styles</h2>

        <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo'>
        Check out our classy haircuts and choose one would best suit you and your style.
        </p>

        <div className='grid sm:grid-cols-auto md:grid-cols-4  gap-6 my-10 '>
          {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index}
            className='border border-gray-400 rounded-lg px-8 py-12
             hover:shadow-black cursor-pointer hover:bg-lightHover 
             hover:-translate-y-1 duration-500 
             dark:hover:bg-darkHover dark:hover:shadow-white '>
              <Image src={icon} alt='' className='w-10' />
              <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                {description}
              </p>
              <a href={link}>
                MORE <Image src={assets.right_arrow} alt='' className='w-4'/>
              </a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services;