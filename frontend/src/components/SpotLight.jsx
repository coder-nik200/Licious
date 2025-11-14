import React, { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import spotlight1 from "../assets/spotlight1.avif";
import spotlight2 from "../assets/spotlight2.avif";
import spotlight3 from "../assets/spotlight3.avif";
import spotlight4 from "../assets/spotlight4.avif";
import spotlight5 from "../assets/spotlight5.avif";

const images = [spotlight1, spotlight2, spotlight3, spotlight4, spotlight5];

const SpotLight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // SWIPE / DRAG
  let startX = 0;

  const handleStart = (x) => {
    startX = x;
  };

  const handleEnd = (x) => {
    if (startX - x > 50) nextImage();
    if (x - startX > 50) prevImage();
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4 relative">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        In the spotlight
      </h1>

      <p className="text-gray-600 mt-1 text-sm md:text-base">
        Explore our signature meat selection!
      </p>

      {/* SLIDER */}
      <div className="relative mt-8 w-full overflow-hidden">
        {/* LEFT ARROW */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
          bg-white p-1 md:p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <IoIosArrowBack className="text-xl md:text-2xl" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
          bg-white p-1 md:p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <IoIosArrowForward className="text-xl md:text-2xl" />
        </button>

        {/* SLIDES */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <img
                src={img}
                alt="spotlight"
                className="
                  w-full 
                  h-72 
                  sm:h-80 
                  md:h-[450px] 
                  lg:h-[500px] 
                  object-cover rounded-3xl shadow-lg
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
              ${currentIndex === i ? "bg-[#d44172] scale-125" : "bg-gray-300"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SpotLight;
