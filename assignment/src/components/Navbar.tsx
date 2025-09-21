import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();

  // Pages where we want to hide Login/Sign Up
  const hideAuthButtonsPaths = [
    "/blogs",
    "/contact",
    "/about",
    "/faq",
    "/services",
    "/shop",
    "/pages",
    "/elements",
    "/buy",
  ];
  const hideAuthButtons = hideAuthButtonsPaths.some((path) =>
    location.pathname.startsWith(path)
  );

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

        {/* Quick Links */}
        <div className="flex space-x-6">
          <span>WELCOME TO OUR STORE!</span>
          <Link to="/blogs" className="hover:underline">
            BLOG
          </Link>
          <Link to="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link to="/contact" className="hover:underline">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Middle section */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div>
          <Link to="/">          
            <img className="logo" src="https://kapee.presslayouts.com/wp-content/themes/kapee/assets/images/logo.png" alt="Kapee"></img>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex items-center border rounded-md overflow-hidden w-1/2">
          <input
            type="text"
            placeholder="Search for products, categories, brands, sku..."
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <select className="border-l px-3 text-gray-600 text-sm">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Shoes</option>
          </select>
          <button className="bg-yellow-500 p-3 text-white" aria-label="Search">
            <Search />
          </button>
        </div>

        {/* Icons / Auth */}
        <div className="flex items-center space-x-6 text-gray-700">
          {!hideAuthButtons && (
            <div className="flex items-center space-x-1 cursor-pointer">
              <User aria-label="User" />
              <span className="text-sm">
                HELLO,{" "}
                <span className="font-semibold">
                  <Link to="/RegistrationForm">SIGN IN</Link>
                </span>
              </span>
            </div>
          )}
          <div className="relative cursor-pointer">
            <Heart aria-label="Wishlist" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
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
        <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md">
          <span className="mr-2 font-semibold">SHOP BY CATEGORIES</span>
          <Menu />
        </button>
        <ul className="flex space-x-6 ml-6 text-gray-700 font-medium">
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/pages">PAGES</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/blogs">BLOG</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/elements">ELEMENTS</Link>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <Link to="/buy">BUY NOW</Link>
          </li>
          <li>
           <Link to="/login" className="bg-blue-500 text-black-500 px-4 py-2 rounded hover:bg-blue-100">
          Login
        </Link>
        </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
