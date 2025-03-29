import React from 'react';
import Image from 'next/image';
import { workData, assets } from '@/assets/assets';
import Link from 'next/link';

const Work = ({isDarkMode}) => {
  return (
    <div id='work' className='mx-auto flex flex-col items-center justify-center w-full px-[12%] pt-[40px] pb-[10px] scroll-mt-20'>
        <h2 className='text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white'>Haircuts and Styles</h2>
        <p className='font-regular text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo'>
        Check out our classy haircuts and choose one that will best suit you and your style.
        </p>

        <div className='place-items-center bg-darkHover/70 backdrop-blur-md text-darkTheme min-w-[283px] grid sm:grid-cols-auto md:grid-cols-4 my-10 gap-5 dark:text-black'>
            {workData.map((project, index)=>(
                <div className='mx-auto flex flex-col items-center justify-center min-w-[283px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                 key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                    <Link href="/services" className='bg-white w-10/12 rounded-md absolute bottom-5
                    left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500
                    group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='font-regular text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex
                        items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition
                        '>
                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                    </Link>
                </div>
            ))}
        </div>

        <Link href="/services" className='font-regular w-max flex itmes-center justify-center gap-2 text-gray-700
        border-[0.5px] border-gray-700 rounded-md py-3 px-10 mx-auto my-1 hover:bg-lightHover duration-500
        dark:text-white dark:border-white dark:hover:bg-darkHover'>
            MORE<Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow'
            className='w-4 h-4 py-auto my-auto' />
        </ Link>

    </div>
  )
}

export default Work;