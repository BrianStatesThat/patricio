import React from 'react';
//code inspired by https://uiverse.io/Yaya12085/empty-horse-27
// Component sourced from UI Verse (https://uiverse.io)
// License: MIT (or as specified)
// Modifications: [if any modifications were made]
const Subscription = () => {
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-around
       w-[260px] md:w-[500px] p-[20px_1px] m-[10px_0] 
       text-center relative cursor-pointer shadow-[0_10px_15px_-3px_rgba(33,150,243,.4),0_4px_6px_-4px_rgba(33,150,243,.4)] 
       rounded-xl bg-gradient-to-br from-[#04051dea] to-[#2b566e]">
        <div className="p-5">
          <div className="font-extrabold uppercase text-[rgba(255,255,255,0.64)] mt-2.5 text-[25px] tracking-[1px]">
            VIP Subscription
          </div>
          <div className="text-white font-extrabold text-[40px] [text-shadow:0px_0px_10px_rgba(0,0,0,0.42)]">
            R100 per month
          </div>
          <div className="text-[rgba(255,255,255,0.6)] mt-2.5 text-sm">
            Sign up for our VIP subscription to enjoy queue skips and receive two free basic haircuts each month, no dye included.
             Join now and take advantage of these exclusive perks!
          </div>
        </div>
        <button className="select-none border-none outline-none text-white uppercase font-bold text-xs py-3 px-6 bg-[rgb(33_150_243)] rounded-lg w-[90%] [text-shadow:0px_4px_18px_#2c3442]">
          Join now
        </button>
      </div>
    </div>
  );
}

export default Subscription;