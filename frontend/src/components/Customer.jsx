import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import customers from "../JsonFiles/customersay.js";

const Customers = () => {
  const scrollRef = useRef(null);
  const limitedItems = customers.products;

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth * 0.8; // Scroll ~80% of container width
      const newScroll =
        direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

      container.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const updateArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1); // small offset for precision
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrows);
    updateArrows(); // initial check

    window.addEventListener("resize", updateArrows); // update on resize

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    <>
    <section className="relative my-6 mx-2 max-w-6xl lg:mx-auto">
            <h2 className="text-xl font-semibold">{customers.name}</h2>
      <p className="text-gray-600 mb-4">{customers.subText}</p>
      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden lg:flex"
        >
          <FaArrowLeftLong size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden lg:flex"
        >
          <FaArrowRightLong size={20} />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar select-none px-2"
      >
        {limitedItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[150px] sm:min-w-[170px] md:min-w-[200px] bg-white rounded-lg p-3 flex-shrink-0"
          >
            <img
              src={item.webImage}
              alt={item.id}
              className="w-full h-32 sm:h-36 md:h-68 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
    <section className="part2 w-full bg-[#fdf3f6] py-10 px-4 sm:px-8 lg:px-24">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
    
    {/* Point 1 */}
    <div className="flex flex-col gap-4 flex-1">
      <div className="h-2 w-20 bg-[#D11243] rounded"></div>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          We will sell only the meat that we would eat ourselves.
        </h4>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          At Licious, we’re big meat-lovers. And by big, we mean huge. So when it comes to the meat we put on your plate, we’re extremely picky. Every single product is handpicked by a team with years of experience.
        </p>
      </div>
    </div>

    {/* Point 2 */}
    <div className="flex flex-col gap-4 flex-1">
      <div className="h-2 w-20 bg-[#D11243] rounded"></div>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          If it’s not fresh, we won’t sell it
        </h4>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 4°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery, we keep it chilled right up to your doorstep. Did we mention that we’re obsessed?
        </p>
      </div>
    </div>

    {/* Point 3 */}
    <div className="flex flex-col gap-4 flex-1">
      <div className="h-2 w-20 bg-[#D11243] rounded"></div>
      <div>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          We will charge only for what you buy
        </h4>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Doesn’t everyone do this? Not really. Most other places first weigh the meat, then cut up the pieces, and throw out the parts which aren’t fit to eat, such as offal, gizzard, wingtips, etc. But you still pay based on the original weight even though what you finally get is 10% to 30% less.
        </p>
      </div>
    </div>

  </div>
</section></>
  );
};

export default Customers;
