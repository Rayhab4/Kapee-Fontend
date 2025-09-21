// src/components/ProductShowcase.tsx
import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Product interface
interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: string;
  tagLine: string;
}

// Expanded products list: 6 products per category
const products: Product[] = [
  // Featured
  { id: 1, name: "Apple AirPods Pro", price: "$85.00", image: "https://i.pinimg.com/1200x/11/b2/c2/11b2c26e69f2bc7de9704b03b2fe5c9f.jpg", category: "Featured", tagLine: "Wireless Sound" },
  { id: 2, name: "JBL Bluetooth Speaker", price: "$96.00", image: "https://i.pinimg.com/736x/88/ca/24/88ca2472db2920fed4c870b192fda11d.jpg", category: "Featured", tagLine: "Portable & Powerful" },
  { id: 3, name: "Bose Noise Cancelling Headphones", price: "$120.00", image: "https://i.pinimg.com/736x/12/34/56/123456example.jpg", category: "Featured", tagLine: "Crystal Clear Sound" },
  { id: 4, name: "Sony Wireless Earbuds", price: "$75.00", image: "https://i.pinimg.com/736x/65/43/21/654321example.jpg", category: "Featured", tagLine: "Comfort & Quality" },
  { id: 5, name: "Beats Studio3", price: "$180.00", image: "https://i.pinimg.com/736x/23/45/67/234567example.jpg", category: "Featured", tagLine: "High Fidelity" },
  { id: 6, name: "Samsung Galaxy Buds", price: "$99.00", image: "https://i.pinimg.com/736x/34/56/78/345678example.jpg", category: "Featured", tagLine: "True Wireless" },

  // Recent
  { id: 7, name: "Apple iPhone 11 Pro Max", price: "$199.00", oldPrice: "$254.00", image: "https://i.pinimg.com/736x/43/fd/59/43fd59e5a7c6adba1584ec69c515cf4e.jpg", category: "Recent", tagLine: "Smart & Sleek" },
  { id: 8, name: "Samsung Galaxy S21", price: "$179.00", image: "https://i.pinimg.com/736x/21/43/65/214365example.jpg", category: "Recent", tagLine: "Latest Model" },
  { id: 9, name: "Google Pixel 6", price: "$169.00", image: "https://i.pinimg.com/736x/12/45/67/124567example.jpg", category: "Recent", tagLine: "Smart Photography" },
  { id: 10, name: "OnePlus 9 Pro", price: "$159.00", image: "https://i.pinimg.com/736x/78/90/12/789012example.jpg", category: "Recent", tagLine: "Fast & Smooth" },
  { id: 11, name: "Xiaomi Mi 11", price: "$149.00", image: "https://i.pinimg.com/736x/89/01/23/890123example.jpg", category: "Recent", tagLine: "Affordable Power" },
  { id: 12, name: "Huawei P40 Pro", price: "$199.00", image: "https://i.pinimg.com/736x/90/12/34/901234example.jpg", category: "Recent", tagLine: "Professional Camera" },

  // On Sale
  { id: 13, name: "Samsung Gear 360 Camera", price: "$29.00", oldPrice: "$48.00", image: "https://i.pinimg.com/1200x/03/1a/8a/031a8ae96dddf4134c81ddf215ffe7d0.jpg", category: "On Sale", tagLine: "Capture Every Angle" },
  { id: 14, name: "Wireless Charger Stand", price: "$45.00", image: "https://i.pinimg.com/736x/8d/12/34/8d1234example.jpg", category: "On Sale", tagLine: "Fast Charging" },
  { id: 15, name: "Portable Power Bank", price: "$25.00", image: "https://i.pinimg.com/736x/54/32/10/543210example.jpg", category: "On Sale", tagLine: "Charge Anywhere" },
  { id: 16, name: "Bluetooth Keyboard", price: "$29.00", image: "https://i.pinimg.com/736x/65/43/21/654321example2.jpg", category: "On Sale", tagLine: "Compact & Portable" },
  { id: 17, name: "Smartwatch Pro", price: "$79.00", image: "https://i.pinimg.com/736x/11/22/33/112233example2.jpg", category: "On Sale", tagLine: "Track Your Fitness" },
  { id: 18, name: "HD Webcam", price: "$35.00", image: "https://i.pinimg.com/736x/44/55/66/445566example2.jpg", category: "On Sale", tagLine: "Video Calls Clear" },

  // Top Rated
  { id: 19, name: "Samsung VR Headset", price: "$18.00", image: "https://i.pinimg.com/1200x/3a/0e/84/3a0e842f2c250534316a424ef30e3e5e.jpg", category: "Top Rated", tagLine: "Immersive Experience" },
  { id: 20, name: "Oculus Quest 2", price: "$299.00", image: "https://i.pinimg.com/736x/11/22/33/112233example.jpg", category: "Top Rated", tagLine: "Virtual Reality Gaming" },
  { id: 21, name: "HTC Vive Pro", price: "$499.00", image: "https://i.pinimg.com/736x/44/55/66/445566example.jpg", category: "Top Rated", tagLine: "Next-Level VR" },
  { id: 22, name: "PlayStation VR", price: "$399.00", image: "https://i.pinimg.com/736x/77/88/99/778899example.jpg", category: "Top Rated", tagLine: "Console Compatible" },
  { id: 23, name: "VR Box 2", price: "$49.00", image: "https://i.pinimg.com/736x/22/33/44/223344example.jpg", category: "Top Rated", tagLine: "Affordable VR" },
  { id: 24, name: "Lenovo Mirage VR", price: "$159.00", image: "https://i.pinimg.com/736x/55/66/77/556677example.jpg", category: "Top Rated", tagLine: "High Resolution" },
];

const categories = ["Featured", "Recent", "On Sale", "Top Rated"];

const ProductShowcase: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("Featured");
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCount = 4;

  const filteredProducts = products.filter(p => p.category === currentCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left" && startIndex > 0) setStartIndex(startIndex - 1);
    if (direction === "right" && startIndex < filteredProducts.length - visibleCount)
      setStartIndex(startIndex + 1);
  };

  return (
    <div className="w-full bg-gray-50 py-10 px-6">
      {/* Category Tabs */}
      <div className="flex space-x-6 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setCurrentCategory(cat); setStartIndex(0); }}
            className={`px-4 py-2 font-semibold rounded ${
              currentCategory === cat
                ? "bg-yellow-500 text-white shadow-lg"
                : "bg-white text-gray-700 border hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative flex items-center">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-yellow-500 transition"
        >
          <SlArrowLeft size={24} />
        </button>

                <div className="flex overflow-hidden w-full space-x-4">
          {filteredProducts
            .slice(startIndex, startIndex + visibleCount)
            .map((product) => (
              <div
                key={product.id}
                className="min-w-[220px] bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.tagLine}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="font-bold text-yellow-500">{product.price}</span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 z-10 p-3 bg-white shadow-md rounded-full hover:bg-yellow-500 transition"
        >
          <SlArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;

