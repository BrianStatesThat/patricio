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
    <div className="flex flex-col w-full pt-[64px] px-1 items-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-screen rounded-lg mx-auto md:w-[300px] lg:w-[600px] xl:w-[800px] overflow-x-hidden">
        <Calendar1Icon className="text-darkTheme dark:text-white mx-auto justify-center items-center w-12 h-12" />
        <h2 className="text-center text-4xl font-bold mb-6 text-darkTheme dark:text-white">Book an Appointment</h2>
        <p className="font-regular text-center max-w-2x mx-auto pt-5 px-1">
          Book your appointment with us today, and avoid the hassle of waiting in line!
          <br /> We look forward to seeing you soon!
        </p>
        {/* Calendly Widget */}
        <div
          className="calendly-inline-widget overflow-hidden"
          data-url="https://calendly.com/mbspeelman/30min?hide_event_type_details=1"
          style={{ minWidth: '360px', height: '800px' }}
        ></div>
      </div>
    </div>
  );
};

export default Book;