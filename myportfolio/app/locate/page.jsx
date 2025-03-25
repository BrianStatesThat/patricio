'use client';
import React from 'react';

const Page = () => {

    return (
        <div className='flex flex-col w-full h-full pt-[64] pb-[84px] px-1 item-center justify-center overflow-x-hidden'>
            <h2 className='text-center pb-[5px]'>Locate Us</h2>
            <div id="map" className='h-fit w-[350x] rounded-lg mx-auto md:w-[450px] lg:w-[600px] xl:w-[800px] overflow-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1742298981461!6m8!1m7!1sAvWHD6BwJ2kuFf3c5RaXJQ!2m2!1d-33.87291611363754!2d25.58397673796407!3f28.542775740084945!4f-5.703038083750528!5f1.2205863979737528" className='w-full h-[450px] rounded-sm mx-auto' referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    );
};

export default Page;