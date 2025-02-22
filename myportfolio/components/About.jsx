import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-28 ' >
        <h4 className='text-center mb-4 text-lg font-Ovo lg:pt-16 sm:pt-12'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='w-64 sm:w-80 h-fit rounded-3xl max-w-none overflow-hidden '>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl h-96 object-cover' />
          </div>
          <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
            A passionate Front-End Web Developer based in Gqeberha, with a strong foundation in IT and web technologies. I specialize in creating user-friendly, responsive websites that deliver seamless experiences. With a background in analytical chemistry, I bring a detail-oriented approach to problem-solving and design. Currently, I'm focusing on expanding my skills in full-stack development and exploring blockchain applications. Lets connect and create something amazing together!
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl' >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
              hover:-translate-y-1 duration-500 ease-in-out hover:shadow-black
              dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
              ))}
            </ul>

            <h4 className='my-6 text-gray-700 font-Ovo'>Tools</h4>

            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14
                aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500 ease-in-out' 
                 key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About;