import React from "react";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full shadow-md">
      {/* Top bar */}
      <div className="bg-yellow-500 text-white text-sm flex justify-between items-center px-6 py-2">
        {/* Language + Currency */}
        <div className="flex space-x-4">
          <select className="bg-yellow-500 text-white focus:outline-none">
            <option>English</option>
            <option>Kinyarwanda</option>
          </select>
          <select className="bg-yellow-500 text-white focus:outline-none">
            <option>$ Dollar (US)</option>
            <option>€ Euro</option>
          </select>
        </div>


        {/* Links */}
        <div className="flex space-x-6">
          <span>WELCOME TO OUR STORE!</span>
          <a href="#" className="hover:underline">
            BLOG
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            CONTACT US
          </a>
        </div>
      </div>

      {/* Middle section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-900">kapee.</div>

        {/* Search bar */}
        <div className="flex items-center border rounded-md overflow-hidden w-1/2">
          <input
            type="text"
            placeholder="Search for products, categories, brands, sku..."
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <select className="border-l px-3 text-gray-600 flex space-x-3 text-sm">
            <option className="cursor-pointer hover:text-yellow-500">All Categories</option>
            <option className="cursor-pointer hover:text-yellow-500">Men</option>
            <option className="cursor-pointer hover:text-yellow-500">Women</option>
            <option className="cursor-pointer hover:text-yellow-500">Shoes</option>
          </select>
          <button className="bg-yellow-500 p-3 text-white" aria-label="Search">
            <Search />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          {/* User */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <User aria-label="User" />
            <span className="text-sm">
              HELLO, <span className="font-semibold">SIGN IN</span>
            </span>
          </div>
          {/* Wishlist */}
          <div className="relative cursor-pointer">
            <Heart aria-label="Wishlist" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          {/* Cart */}
          <div className="relative flex items-center cursor-pointer">
            <ShoppingCart aria-label="Cart" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1 rounded-full">
              0
            </span>
            <span className="ml-2 text-sm">$0.00</span>
          </div>
        </div>
      </div>

      {/* Bottom menu */}
      <nav className="flex items-center bg-white border-t px-6 py-3">
        {/* Shop by categories with burger icon */}
        <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md">
          <span className="mr-2 font-semibold">SHOP BY CATEGORIES</span>
          <Menu />
        </button>

        {/* Nav links */}
        <ul className="flex space-x-6 ml-6 text-gray-700 font-medium">
          <li className="hover:text-yellow-500 cursor-pointer">HOME</li>
          <li className="hover:text-yellow-500 cursor-pointer">SHOP</li>
          <li className="hover:text-yellow-500 cursor-pointer">PAGES</li>
          <li className="hover:text-yellow-500 cursor-pointer">BLOG</li>
          <li className="hover:text-yellow-500 cursor-pointer">ELEMENTS</li>
          <li className="hover:text-yellow-500 cursor-pointer">BUY NOW</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
