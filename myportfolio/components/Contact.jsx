import { assets } from '@/assets/assets'
import React, { useState } from 'react';
import Image from 'next/image'; 
import { MailIcon } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("") ;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f8a6ed4-9a37-4a81-87e6-fc9667eb120a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] scroll-mt-20 overflow-x-hidden pt-[64px] pb-[84px]'>
        <MailIcon className='text-darkTheme dark:text-white mx-auto justify-center items-center w-24 h-24'/>
        <h2 className='text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white'>Contact Form</h2>

        <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-regular'>
        Have a question or feedback? Fill out the form below to share your thoughts or make an inquiry.
         We're here to keep you looking sharp and ensure you have the best experience at Patrick's Barber Shop!
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='flex flex-col justify-between gap-6 mt-10 mb-8 overflow-hidden'>
            <input className='font-regular  p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white w-ful dark:bg-darkTheme dark:text-white' type="text" placeholder='Please enter your name' required
            name='name' />
            <input className='font-regular  p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white w-full dark:bg-darkTheme dark:text-white' type="email" placeholder='Please enter your email address' required 
            name='email'/>
          </div>
          <textarea className='font-regular w-full mb-6 p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white dark:bg-darkTheme dark:text-white ' rows='6' placeholder='Please enter your message' name='message' id="" required ></textarea>

          <button type='submit'
            className='font-regular py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-md mx-auto hover:bg-black duration-500 dark:border-[0.5px] dark:border-white dark:bg-black dark:hover:bg-stone-950' >Submit now <Image
            src={assets.right_arrow_white} alt='' className='w-4'/></button>

            <p className='mt-4 font-regular'>{result}</p>
        </form>
    </div>
  )
}

export default Contact