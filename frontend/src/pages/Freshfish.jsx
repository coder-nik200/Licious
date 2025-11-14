import React from "react";
import { useNavigate } from "react-router-dom";
import freshfood from "../JsonFiles/FreshWaterPams.js";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Freshfish = () => {
  const navigate = useNavigate();
  const products = freshfood.products;

  return (
    <section className="w-full py-4 px-4 lg:px-24">

      {/* Header Row */}
      <div className="flex items-center md:justify-between mb-4">

        {/* Back Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-bold cursor-pointer"
        >
          <FaArrowLeftLong />
        </button>

        {/* Title */}
        <h2 className="text-[1.2rem] ml-3 font-semibold">{freshfood.name}</h2>

        {/* Search Icon */}
        <button className="text-2xl cursor-pointer">
          <FaSearch />
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.variantId}
            className="bg-white rounded-lg p-3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-2xl"
            />

            {/* <h3 className="font-medium mt-2">{item.name.length>48?item.name.slice(0,30)+"...":item.name}</h3> */}
            <h3 className="font-medium mt-2"> {item.name.length > 48 ? item.name.slice(0, 30) + "..." : item.name}</h3>
            <p className="text-xs">{item.usp.length>48?item.usp.slice(0,48)+"...":item.usp}</p>
                                        {/* Weight | Pieces | Serves */}
            <p className="text-sm text-gray-600 mt-1">
              {item.weight} | {item.pieces} pcs | Serves {item.serves}
            </p>
            {/* Price */}
            <p className="font-semibold mt-2">
              ₹{item.discountedPrice}
              <span className="text-gray-400 line-through ml-1">
                ₹{item.basePrice}
              </span>
              <span className="text-green-600 ml-1">
                ({item.discountPercentage}% OFF)
              </span>
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Freshfish;
