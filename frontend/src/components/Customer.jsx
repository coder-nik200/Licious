// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import customers from "../JsonFiles/customersay.js";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Customers = () => {
//   const scrollRef = useRef(null);
//   const limitedItems = customers.products;

//   // Arrow visibility state
//   const [showLeft, setShowLeft] = useState(false);
//   const [showRight, setShowRight] = useState(true);

//   // Scroll left/right
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -200 : 200;
//       scrollRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Update arrows visibility based on scroll position
//   const updateArrows = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setShowLeft(scrollLeft > 0);
//       setShowRight(scrollLeft + clientWidth < scrollWidth);
//     }
//   };

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     // Listen for scroll
//     container.addEventListener("scroll", updateArrows);

//     // Initial check
//     updateArrows();

//     return () => container.removeEventListener("scroll", updateArrows);
//   }, []);

//   return (
//     <section className="my-4 mx-2 py-4 relative  max-w-6xl lg:mx-auto">

//       {/* Left Arrow */}
//       {showLeft && (
//         <button
//           onClick={() => scroll("left")}
//           className="absolute top-1/2 hidden lg:block lg:-left-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//         >
//           <FaArrowLeftLong />
//         </button>
//       )}

//       {/* Right Arrow */}
//       {showRight && (
//         <button
//           onClick={() => scroll("right")}
//           className="absolute top-1/2 hidden lg:block lg:right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
//         >
//           <FaArrowRightLong />
//         </button>
//       )}

//       {/* Scroll Container */}
//       <div
//         ref={scrollRef}
//         className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth no-scrollbar select-none"
//       >
//         {limitedItems.map((item) => (
//           <div
//             key={item.variantId}
//             className="min-w-[150px] sm:min-w-[170px] md:min-w-[200px] bg-white rounded-lg p-3 flex-shrink-0"
//           >
//             <img
//               src={item.webImage}
//               alt={item.id}
//               className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Customers;

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
    <section className="relative my-6 mx-2 max-w-6xl lg:mx-auto">
      {/* Left Arrow */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden lg:flex"
        >
          <FaArrowLeftLong size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hidden lg:flex"
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
              className="w-full h-32 sm:h-36 md:h-56 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
