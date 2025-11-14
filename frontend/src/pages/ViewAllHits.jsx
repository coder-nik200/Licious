import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../JsonFiles/currenthits.js";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const ViewAllHits = () => {
  const navigate = useNavigate();
  const products = data.products;

  return (
    <section className="w-full py-4 px-4 lg:px-60">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">

        {/* Back Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-bold cursor-pointer md:hidden"
        >
          <FaArrowLeftLong />
        </button>

        {/* Title */}
        <h2 className="text-[1.2rem] font-semibold">{data.title}</h2>

        {/* Search Icon */}
        <button className="text-2xl cursor-pointer md:hidden">
          <FaSearch />
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.variantId}
            className="bg-white rounded-b-2xl  shadow-lg"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
          <div className="p-3">
            {/* Product Name */}
            <h3 className="font-medium mt-2 text-sm sm:text-base md:text-base">
              {item.name.length > 48 ? item.name.slice(0, 30) + "..." : item.name}
            </h3>

            {/* USP */}
            <p className="text-xs sm:text-sm">
              {item.usp.length > 48 ? item.usp.slice(0, 48) + "..." : item.usp}
            </p>

            {/* Weight | Pieces | Serves */}
            <p className="text-sm text-gray-600 mt-1">
              {item.weight} | {item.pieces} pcs | Serves {item.serves}
            </p>

            {/* Price */}
            <p className="font-semibold mt-2">
              ₹{item.price.discountedPrice}
              <span className="text-gray-400 line-through ml-1">
                ₹{item.price.mrp}
              </span>
              <span className="text-green-600 ml-1">
                ({item.price.discountPercent}% OFF)
              </span>
            </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ViewAllHits;
