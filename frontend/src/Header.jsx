import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "./UserContext";
import logo from "./assets/logo.svg";
import location from "./assets/location.svg";
import dropDown from "./assets/dropDown.svg";
import category from "./assets/categories-grey.svg";
import store from "./assets/store.svg";
import profile from "./assets/profile-grey.svg";
import cart from "./assets/cart.svg";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-4 shadow-md bg-white gap-4 md:px-6">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center h-12 w-20 md:h-14 md:w-24 mx-auto md:mx-0"
      >
        <img src={logo} alt="Logo" className="h-full w-full object-contain" />
      </Link>

      {/* Location – hide on mobile */}
      <div className="hidden md:flex flex-col cursor-pointer">
        <div className="flex items-center gap-2">
          <img src={location} alt="Location" className="h-4" />
          <span className="font-semibold text-lg">Bangalore</span>
          <img src={dropDown} alt="Dropdown" className="h-2" />
        </div>
        <p className="text-sm text-gray-600 leading-tight">
          21/1, KPWD Quarters, Ananda Puram, <br /> Jeevan Bima Nagar
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full order-last md:order-none md:max-w-lg mx-auto">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 text-base md:text-lg border border-gray-300 rounded-full
          focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Search for any delicious product"
        />
        <IoIosSearch
          className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 
          text-xl md:text-2xl text-gray-600"
        />
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-4 md:gap-6 text-center w-full justify-around md:w-auto">
        <div className="flex flex-col items-center cursor-pointer">
          <img src={category} alt="" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-[10px] md:text-xs font-medium">Categories</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img src={store} alt="" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-[10px] md:text-xs font-medium">Stores</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img src={profile} alt="" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-[10px] md:text-xs font-medium">Login</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <img src={cart} alt="" className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-[10px] md:text-xs font-medium">Cart</span>
        </div>
      </div>
    </header>
  );
}
