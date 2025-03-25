'use client';
import React from 'react';

const Locate = () => {

    return (
        <div className='flex flex-col w-full h-full pt-[64] pb-[84px] px-1 item-center justify-center overflow-x-hidden'>
            <h2 className='text-center mb-2 text-4xl font-Ovo'>Locate Us</h2>
            
            <div id="map" className='h-fit w-[300x] rounded-lg mx-auto md:w-[450px] lg:w-[600px] xl:w-[800px] overflow-x-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1742298981461!6m8!1m7!1sAvWHD6BwJ2kuFf3c5RaXJQ!2m2!1d-33.87291611363754!2d25.58397673796407!3f28.542775740084945!4f-5.703038083750528!5f1.2205863979737528"
            allow="accelerometer; gyroscope" className='relative pt-[128px] w-full h-[350px] rounded-sm mx-auto' referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo px-1'>
            Find us at Patrick's Barber Shop in the heart of Boxongo! We're here to keep you looking sharp and stylish.
             Conveniently located for all your grooming needs - swing by and let us take care of your fresh cut today!
            </p>
        </div>
    );
};

export default Locate;