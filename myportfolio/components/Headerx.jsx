import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Headerx = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const images = [
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
    "/agustin-fernandez-Znyjl9pbaUs-unsplash.jpg",
  ];

  // Touch Start Handler
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  // Touch End Handler
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      nextSlide(); // Swipe left
    } else if (startX - endX < -50) {
      prevSlide(); // Swipe right
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="pt-[70px] relative flex justify-center items-center mx-auto bg-neutral rounded-box sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-6 lg:p-8 overflow-hidden"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item min-w-full flex justify-center items-center"
          >
            <img src={src} alt={`Slide ${index}`} className="rounded-lg w-full h-[400px] md:h-auto" />
          </div>
        ))}
      </div>
  
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-none text-white p-2 rounded-full"
      >
        <Image src={assets.arrowleft} alt="left arrow" className="w-10 h-10 rounded-full"/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-none text-white p-2 rounded-full"
      >
        <Image src={assets.arrowright} alt="right arrow" className="w-10 h-10 rounded-full" />
      </button>
    </div>
  );
};

export default Headerx;