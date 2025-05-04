'use client';
import { LocateIcon } from 'lucide-react';
import React from 'react';

const Locate = () => {

    return (
        <div className='flex flex-col mx-auto justify-center items-center w-full scroll-mt-20 overflow-x-hidden pt-[64px] pb-[84px]'>
            <div className=' w-full overflow-x-hidden px-[12%]'>
            <LocateIcon className='text-darkTheme dark:text-white mx-auto justify-center items-center w-12 h-12'/>
            <h2 className='text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white'>Locate Us</h2>
            <p className='font-regular text-center max-w-2x mx-auto pt-5 px-1'>
            Find us at Patrick's Barber Shop in the heart of Boxongo! We're here to keep you looking sharp and stylish.
             Conveniently located for all your grooming needs - swing by and let us take care of your fresh cut today!
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1742298981461!6m8!1m7!1sAvWHD6BwJ2kuFf3c5RaXJQ!2m2!1d-33.87291611363754!2d25.58397673796407!3f28.542775740084945!4f-5.703038083750528!5f1.2205863979737528"
            allow="accelerometer; gyroscope" className='font-regular relative flex flex-col items-center justify-center pt-[10px] pb-[84px] w-[300px] h-[500px] rounded-md mx-auto' referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    );
};

export default Locate;