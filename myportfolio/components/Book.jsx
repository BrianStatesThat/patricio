"use client";
import { Calendar1Icon } from 'lucide-react';
import React, { useEffect } from 'react';

const Book = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=" flex flex-col mx-auto justify-center items-center w-full scroll-mt-20 overflow-x-hidden pt-[64px] pb-[84px]">
      <div className="w-full overflow-x-hidden px-[12%]">
        <Calendar1Icon className="text-darkTheme dark:text-white mx-auto justify-center items-center w-12 h-12" />
        <h2 className="text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white">Book an Appointment</h2>
        <p className="font-regular text-center max-w-2x mx-auto pt-5 px-1">
          Book your appointment with us today, and avoid the hassle of waiting in line! We look forward to seeing you soon!
        </p>
      </div>
      {/* Calendly Widget */}
      <div
          className="calendly-inline-widget overflow-hidden flex mx-auto justify-center items-center w-full mt-10"
          data-url="https://calendly.com/mbspeelman/30min?hide_event_type_details=1"
          style={{ minWidth: '360px', height: '800px' }}
        ></div>
    </div>
  );
};

export default Book;