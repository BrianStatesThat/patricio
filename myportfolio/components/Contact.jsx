import { assets } from '@/assets/assets'
import React, { useState } from 'react';
import Image from 'next/image'; 

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
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat
    bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Let's Connect</h4>
        <h2 className='text-center text-5xl font-Ovo'>Send me a message</h2>

        <p className='text-center max-w-2x mx-auto mt-5 mb-12 font-Ovo'>
        Share your name, email, and a little about your project or question.
         I would love to hear from you! Once you are ready, click Submit, and I will be in touch soon to help however I can. Looking forward to connecting!
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white' type="text" placeholder='Please enter your name' required
            name='name' />
            <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white' type="email" placeholder='Please enter your email address' required 
            name='email'/>
          </div>
          <textarea className='w-full mb-6 p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white' rows='6' placeholder='Please enter your message' name='message' id="" required ></textarea>

          <button type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black duration-500' >Submit now <Image
            src={assets.right_arrow_white} alt='' className='w-4'/></button>

            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact