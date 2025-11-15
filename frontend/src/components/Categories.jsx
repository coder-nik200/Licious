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
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
        What’s cooking today?
      </h1>

      <p className="text-gray-600 mt-1 text-sm md:text-base">
        Freshest meats and much more!
      </p>

      <div
        className="
      grid
      grid-cols-4
      sm:grid-cols-4
      md:grid-cols-4
      lg:grid-cols-5
      xl:grid-cols-6
      gap-4 md:gap-6 mt-10
    "
      >
        {[
          { img: chicken, name: "Chicken" },
          { img: seaFish, name: "Fish & Seafood" },
          { img: readyToCook, name: "Ready to cook" },
          { img: specials, name: "Licious Specials" },
          { img: burger, name: "Wings & Burger Patty" },
          { img: mutton, name: "Mutton" },
          { img: liver, name: "Liver & More" },
          { img: crabs, name: "Prawns & Crabs" },
          { img: eggs, name: "Eggs" },
          { img: snacks, name: "Crispy Snacks" },
          { img: combos, name: "Combos" },
          { img: masala, name: "Meat Masala" },
          { img: cuts, name: "Spreads & Cold Cuts" },
          { img: kebab, name: "Kebab" },
          { img: party, name: "Party Starters" },
          { img: weekend, name: "Weekend Specials" },
        ].map((item, index) => (
          <div key={index} className="cursor-pointer text-center">
            <img
              src={item.img}
              alt={item.name}
              className="h-20 sm:h-24 md:h-28 lg:h-32 mx-auto object-contain"
            />
            <p className="mt-2 font-medium text-gray-800 text-xs sm:text-sm md:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
