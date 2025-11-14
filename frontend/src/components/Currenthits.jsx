import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "../JsonFiles/currenthits.js";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Currenthits = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const limitedItems = data.products.slice(0, 5);

  // Scroll left/right with buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-4 relative lg:px-24 px-4">
      {/* Title */}
      <h2 className="text-xl font-semibold">{data.title}</h2>
      <p className="text-gray-600 mb-4">{data.subText}</p>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 hidden lg:block lg:left-14 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <FaArrowLeftLong />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 hidden lg:block lg:right-14 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
     <FaArrowRightLong />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar select-none"
      >
        {limitedItems.map((item) => (
          <div
            key={item.variantId}
            className="min-w-[150px] sm:min-w-[170px] md:min-w-[200px] bg-white rounded-lg p-3 flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl"
            />

            <h3 className="font-medium mt-2 text-sm sm:text-base md:text-lg">
              {item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {item.weight} | {item.pieces} pcs | Serves {item.serves}
            </p>

            <p className="font-semibold mt-2 text-sm sm:text-base md:text-base">
              ₹{item.price.discountedPrice}
              <span className="text-gray-400 line-through ml-1">₹{item.price.mrp}</span>
              <span className="text-green-600 ml-1">
                ({item.price.discountPercent}% OFF)
              </span>
            </p>
          </div>
        ))}

        {/* View All Card */}
        <div
          onClick={() => navigate("/view-all-hits")}
          className="min-w-[150px] sm:min-w-[170px] md:min-w-[190px] bg-[#faf7f2] 
                     flex items-center justify-center rounded-lg text-[#d42450] 
                     font-bold text-sm sm:text-base md:text-lg cursor-pointer flex-shrink-0"
        >
          View All →
        </div>
      </div>
    </section>
  );
};

export default Currenthits;
