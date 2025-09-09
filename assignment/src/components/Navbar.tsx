import React, { useState } from "react";
import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Men’s Clothing",
  "Women’s Clothing",
  "Accessories",
  "Shoes",
  "Jewellery",
  "Bags & Backpacks",
  "Watches",
  "Dresses",
  "Shirts",
  "T-Shirts",
  "Jackets",
  "Sweaters",
  "Pants",
  "Shorts",
  "Suits",
];

const Navbar: React.FC = () => {
  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);

  // Custom select states
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("$ Dollar (US)");
  const [searchCategory, setSearchCategory] = useState("All Categories");

  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const handleMouseEnter = (menu: string) => setOpenDropdown(menu);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="w-full shadow-md relative">
      {/* Top bar */}
      <div className="bg-yellow-500 text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex space-x-6">
          {/* Language custom select */}
          <div className="relative">
            <span
              onClick={() => setShowLangDropdown((prev) => !prev)}
              className="cursor-pointer"
            >
              {language} ▼
            </span>
            {showLangDropdown && (
              <ul className="absolute mt-2 left-0 bg-white text-black shadow rounded">
                {["English", "Kinyarwanda"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowLangDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Currency custom select */}
          <div className="relative">
            <span
              onClick={() => setShowCurrencyDropdown((prev) => !prev)}
              className="cursor-pointer"
            >
              {currency} ▼
            </span>
            {showCurrencyDropdown && (
              <ul className="absolute mt-2 left-0 bg-white text-black shadow rounded">
                {["$ Dollar (US)", "€ Euro"].map((cur) => (
                  <li
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setShowCurrencyDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex space-x-6">
          <span>WELCOME TO OUR STORE!</span>
          <Link to="/BlogsPage" className="hover:underline">
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
        <div className="text-3xl font-bold text-gray-900">kapee.</div>

        {/* Search bar with category dropdown */}
        <div className="flex items-center border rounded-md overflow-hidden w-1/2">
          <input
            type="text"
            placeholder="Search for products, categories, brands, sku..."
            className="flex-grow px-4 py-2 focus:outline-none"
          />

          {/* Custom search category dropdown */}
          <div className="relative border-l px-3 text-gray-600 text-sm cursor-pointer">
            <span onClick={() => setShowSearchDropdown((prev) => !prev)}>
              {searchCategory} ▼
            </span>
            {showSearchDropdown && (
              <ul className="absolute mt-2 right-0 bg-white text-black shadow rounded w-40">
                {["All Categories", "Men", "Women", "Shoes"].map((cur) => (
                  <li
                    key={cur}
                    onClick={() => {
                      setSearchCategory(cur);
                      setShowSearchDropdown(true);
                    }}
                    className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                  >
                    {cur}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search button */}
          <span
            className="bg-yellow-500 p-3 text-white cursor-pointer"
            aria-label="Search"
          >
            <Search />
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          <div className="flex items-center space-x-1 cursor-pointer">
            <User aria-label="User" />
            <span className="text-sm">
              HELLO, <span className="font-semibold">SIGN IN</span>
            </span>
          </div>
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
        {/* SHOP BY CATEGORY toggle */}
        <span
          onClick={() => setShowCategories((prev) => !prev)}
          className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          <span className="mr-2 font-semibold">SHOP BY CATEGORIES</span>
          <Menu />
        </span>

        {/* Main nav */}
        <ul className="flex space-x-6 ml-6 text-gray-700 font-medium">
          {/* HOME dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("HOME")}
            onMouseLeave={handleMouseLeave}
          >
            <Link className="hover:text-yellow-500 flex items-center gap-1" to="/">
              HOME <span className="text-sm">▼</span>
            </Link>
            {openDropdown === "HOME" && (
              <ul className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/">Home 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/">Home 2</Link>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/">Home 3</Link>
                </li>
              </ul>
            )}
          </li>

          {/* SHOP dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("SHOP")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-yellow-500 flex items-center gap-1">
              SHOP <span className="text-sm">▼</span>
            </span>
            {openDropdown === "SHOP" && (
              <ul className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-yellow-100">Shop Grid</li>
                <li className="px-4 py-2 hover:bg-yellow-100">Shop List</li>
                <li className="px-4 py-2 hover:bg-yellow-100">Single Product</li>
              </ul>
            )}
          </li>

          {/* PAGES dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("PAGES")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-yellow-500 flex items-center gap-1">
              PAGES <span className="text-sm">▼</span>
            </span>
            {openDropdown === "PAGES" && (
              <ul className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/services">Services</Link>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="px-4 py-2 hover:bg-yellow-100">
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            )}
          </li>

          {/* BLOG dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("BLOG")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-yellow-500 flex items-center gap-1">
              <Link to="/BlogsPage">BLOG</Link> <span className="text-sm">▼</span>
            </span>
            {openDropdown === "BLOG" && (
              <ul className="absolute left-0 top-full w-40 bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 hover:bg-yellow-100">Blog Grid</li>
                <li className="px-4 py-2 hover:bg-yellow-100">Blog Single</li>
              </ul>
            )}
          </li>

          {/* BUY NOW */}
          <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#">BUY NOW</a>
          </li>
        </ul>
      </nav>

      {/* CATEGORY SIDEBAR */}
      {showCategories && (
        <aside className="absolute left-0 top-full w-64 bg-white border shadow-md p-4 z-50">
          <ul className="space-y-3 text-gray-700">
            {categories.map((item, index) => (
              <li
                key={index}
                className="flex justify-between cursor-pointer hover:text-yellow-500"
              >
                {item} <span>›</span>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
