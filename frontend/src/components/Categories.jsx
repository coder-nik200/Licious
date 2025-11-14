import React from "react";
import chicken from "../assets/chicken.avif";
import seaFish from "../assets/seaFish.avif";
import readyToCook from "../assets/readyToCook.avif";
import specials from "../assets/specials.avif";
import burger from "../assets/burger.avif";
import mutton from "../assets/mutton.avif";
import liver from "../assets/liver.avif";
import crabs from "../assets/crabs.avif";
import eggs from "../assets/eggs.avif";
import snacks from "../assets/snacks.avif";
import combos from "../assets/combos.avif";
import masala from "../assets/masala.avif";
import cuts from "../assets/cuts.avif";
import kebab from "../assets/kebab.avif";
import party from "../assets/party.avif";
import weekend from "../assets/weekend.avif";

export const Categories = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-semibold text-gray-900">
        What’s cooking today?
      </h1>

      <p className="text-gray-600 mt-1">Freshest meats and much more!</p>

      {/* Category Grid */}
      <div className="grid grid-cols-6 grid-rows-3 gap-6 mt-10">
        <div className=" cursor-pointer text-center">
          <img src={chicken} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Chicken</p>
        </div>

        <div className=" cursor-pointer text-center">
          <img src={seaFish} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Fish & Seafood</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={readyToCook} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Ready to cook</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={specials} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Licious Specials</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={burger} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Wings & Burger Patty</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={mutton} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Mutton</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={liver} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Liver & More</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={crabs} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Prawns & Crabs</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={eggs} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Eggs</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={snacks} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Crispy Snacks</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={combos} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Combos</p>
        </div>
        <div className="cursor-pointer text-center">
          <img src={masala} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Meat Masala</p>
        </div>
        <div className="cursor-pointer text-center">
          <img src={cuts} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Spreads & Cold Cuts</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={kebab} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Kebab</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={party} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Party Starters</p>
        </div>

        <div className="cursor-pointer text-center">
          <img src={weekend} alt="Category" className="h-30 mx-auto" />
          <p className="mt-3 font-medium text-gray-800">Weekend Specials</p>
        </div>
      </div>
    </div>
  );
};
