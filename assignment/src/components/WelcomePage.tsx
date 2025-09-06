import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PromoSection from "./Section2";
import HotDealsSection from "./Servises"

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

const heroBlocks = [
  {
    title: "WIRELESS CHARGING STAND",
    subtitle: "BEST SMARTPHONE",
    discount: "Up To 70% Off",
    img: "https://i.pinimg.com/1200x/e7/b7/72/e7b772331f4704a1bac2f12d78f53167.jpg",
  },
  {
    title: "PERSONALIZED HEADPHONES",
    subtitle: "BEATS EP ON-EAR",
    discount: "Min. 40-80% Off",
    img: "https://i.pinimg.com/736x/97/6e/94/976e94818e08c43b618ea546edec4995.jpg",
  },
];

const WelcomePage: React.FC = () => {
  const [slideIn, setSlideIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroBlocks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? heroBlocks.length - 1 : prev - 1
    );
  };

  return (
   <div>
     <div className="flex flex-1 min-h-screen mx-6">
      {/* Left Sidebar */}
      <aside className="w-1/5 bg-white border-r px-6 py-6 overflow-y-auto">
        <ul className="space-y-3 text-gray-700">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between cursor-pointer hover:text-yellow-500 transform transition-all duration-500 ease-out ${
                slideIn
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item} <span>›</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gray-30 p-10 relative overflow-hidden group">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-5 bg-white shadow p-2 rounded-full 
                     opacity-0 group-hover:opacity-70 hover:opacity-100
                     transition duration-300"
        >
          <SlArrowLeft size={25} />
        </button>

        {/* Single Slide */}
        <div
          key={currentIndex}
          className={`flex items-center gap-6 transform transition-all duration-700 ease-out ${
            slideIn ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          {/* Text */}
          <div className="space-y-4 max-w-md">
            <h4 className="text-yellow-500 font-semibold">
              {heroBlocks[currentIndex].subtitle}
            </h4>
            <h1 className="text-4xl font-extrabold leading-tight">
              {heroBlocks[currentIndex].title}
            </h1>
            <p className="text-lg text-gray-600">
              {heroBlocks[currentIndex].discount}
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 font-bold rounded shadow hover:bg-yellow-600 transition">
              BUY NOW
            </button>
          </div>

          {/* Image */}
          <img
            src={heroBlocks[currentIndex].img}
            alt={heroBlocks[currentIndex].title}
            className="w-80"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-5 bg-white shadow p-2 rounded-full 
                     opacity-0 group-hover:opacity-70 hover:opacity-100
                     transition duration-300"
        >
          <SlArrowRight size={25} />
        </button>
      </section>
      
    </div>
    <PromoSection/>
    <HotDealsSection/>
   </div>
      
  );
};

export default WelcomePage;
