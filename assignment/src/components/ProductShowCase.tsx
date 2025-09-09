import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const bottomCategories = [
  { name: "Beauty", tagline: "Beauty Tagline" },
  { name: "Design", tagline: "Design Tagline" },
  { name: "Dress", tagline: "Dress Tagline" },
  { name: "Fashion", tagline: "Fashion Tagline" },
  { name: "Jacket", tagline: "Jacket Tagline" },
  { name: "Shoes", tagline: "Shoes Tagline" },
  { name: "Watch", tagline: "Watch Tagline" }, // extra category
];

const ProductShowcase: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6; // how many categories visible at once

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else if (
      direction === "right" &&
      startIndex < bottomCategories.length - visibleCount
    ) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="w-full bg-white py-10">
      {/* ---- TOP ROW ---- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Featured */}
        <div>
          <h3 className="font-bold text-gray-800 border-b-2 border-yellow-500 pb-2 mb-4">
            FEATURED
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/11/b2/c2/11b2c26e69f2bc7de9704b03b2fe5c9f.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>Apple AirPods with Wireless…</p>
                <p className="font-semibold">$85.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/736x/88/ca/24/88ca2472db2920fed4c870b192fda11d.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>JBL Wireless Bluetooth Speaker</p>
                <p className="font-semibold">$96.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/f0/dd/d9/f0ddd9eaccdb4539211f89480cbca00c.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>JBL On-Ear Headphones</p>
                <p className="font-semibold">$124.00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Recent */}
        <div>
          <h3 className="font-bold text-gray-800 border-b-2 border-yellow-500 pb-2 mb-4">
            RECENT
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/736x/43/fd/59/43fd59e5a7c6adba1584ec69c515cf4e.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>Apple iPhone 11 Pro Max 256…</p>
                <p>
                  <span className="font-semibold">$199.00</span>{" "}
                  <span className="line-through text-gray-400">$254.00</span>
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/736x/ea/bb/f0/eabbf08f39bc03872f152178c053eff7.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md hover:w-30,h-40" />
              <div>
                <p>Apple AirPods with Wireless…</p>
                <p className="font-semibold">$85.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/70/df/b5/70dfb5ca7f7a7ec1927694c80bd830cf.jpg" alt="product" 
              className="w-20 h-30 object-cover rounded-lg shadow-md"/>
              <div>
                <p>Apple Watch Series 5</p>
                <p className="font-semibold">$499.00 – $599.00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* On Sale */}
        <div>
          <h3 className="font-bold text-gray-800 border-b-2 border-yellow-500 pb-2 mb-4">
            ON SALE
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/bf/6f/35/bf6f35cc51890171cf54e43a463f19c5.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>Apple iPhone 11 Pro Max 256…</p>
                <p>
                  <span className="font-semibold">$199.00</span>{" "}
                  <span className="line-through text-gray-400">$254.00</span>
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/70/df/b5/70dfb5ca7f7a7ec1927694c80bd830cf.jpg" alt="product" 
              className="w-20 h-30 object-cover rounded-lg shadow-md"/>
              <div>
                <p>Apple Watch Series 5</p>
                <p className="font-semibold">$499.00 – $599.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/03/1a/8a/031a8ae96dddf4134c81ddf215ffe7d0.jpg" alt="product" 
              className="w-20 h-30 object-cover rounded-lg shadow-md"/>
              <div>
                <p>Samsung Gear 360 Camera</p>
                <p>
                  <span className="font-semibold">$29.00</span>{" "}
                  <span className="line-through text-gray-400">$48.00</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Top Rated */}
        <div>
          <h3 className="font-bold text-gray-800 border-b-2 border-yellow-500 pb-2 mb-4">
            TOP RATED
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/3a/0e/84/3a0e842f2c250534316a424ef30e3e5e.jpg" alt="product"
              className="w-20 h-30 object-cover rounded-lg shadow-md" />
              <div>
                <p>Samsung Virtual Reality Headset</p>
                <p className="font-semibold">$18.00</p>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/1200x/13/c3/ce/13c3ce459751e601bba5f7c8da0a9b0a.jpg" alt="product" 
              className="w-20 h-30 object-cover rounded-lg shadow-md"/>
              <div>
                <p>Microsoft Xbox One Wireless…</p>
                <p>
                  <span className="font-semibold">$25.00</span>{" "}
                  <span className="line-through text-gray-400">$45.00</span>
                </p>
              </div>
            </li>
            <li className="flex items-center  space-x-3">
              <img 
  src="https://i.pinimg.com/736x/cf/9f/85/cf9f852ef3d349d0d7295e8f01e9c36b.jpg" 
  alt="product"
  className="w-20 h-30 object-cover rounded-lg shadow-md"
/>

              <div>
                <p>Apple Watch Series 5 Black…</p>
                <p className="font-semibold">$599.00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ---- BOTTOM CAROUSEL ---- */}
      <div className="flex items-center justify-center mt-12 space-x-6">
        {/* Left Arrow */}
        <div
          onClick={() => handleScroll("left")}
          className="p-3 rounded-full bg-gray-200 hover:bg-yellow-500 transition cursor-pointer"
        >
          <SlArrowLeft size={20} />
        </div>

        {/* Visible Categories */}
        <div className="flex space-x-8">
          {bottomCategories
            .slice(startIndex, startIndex + visibleCount)
            .map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[120px] cursor-pointer hover:text-yellow-500 transition"
              >
                {/* Box with first letter */}
                <div className="w-16 h-16 flex items-center justify-center border rounded-md shadow-md mb-2">
                  <span className="text-lg font-bold">{cat.name[0]}</span>
                </div>
                <p className="font-semibold">{cat.name}</p>
                <p className="text-sm text-gray-500">{cat.tagline}</p>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => handleScroll("right")}
          className="p-3 rounded-full bg-gray-200 hover:bg-yellow-500 transition cursor-pointer"
        >
          <SlArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
