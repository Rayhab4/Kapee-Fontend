import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProductShowcase from "./ProductShowCase";
import Section2 from "./Section2";
import Services from "./Services";
import BestSellingProducts from "./BestSellProduct";

// -------------------- Types --------------------
interface HeroBlock {
  title: string;
  subtitle: string;
  discount: string;
  img: string;
}

// -------------------- Data --------------------
const categories: string[] = [
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

const heroBlocks: HeroBlock[] = [
  {
    title: "WIRELESS CHARGING STAND",
    subtitle: "BEST SMARTPHONE",
    discount: "Up To 70% Off",
    img: "/image1.jpg",
  },
  {
    title: "PERSONALIZED HEADPHONES",
    subtitle: "BEATS EP ON-EAR",
    discount: "Min. 40-80% Off",
    img: "/image2.jpg",
  },
];

// -------------------- Component --------------------
const WelcomePage: React.FC = () => {
  const [slideIn, setSlideIn] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imgEffect, setImgEffect] = useState<boolean>(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  useEffect(() => {
    setImgEffect(false);
    const timeout = setTimeout(() => setImgEffect(true), 50);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handleNext = (): void =>
    setCurrentIndex((prev) => (prev + 1) % heroBlocks.length);

  const handlePrev = (): void =>
    setCurrentIndex((prev) => (prev === 0 ? heroBlocks.length - 1 : prev - 1));

  // ⬇️ Placeholder Buy Now handler
  const handleBuyNow = (): void => {
    // Intentionally does nothing for now
    console.log("BUY NOW clicked:", heroBlocks[currentIndex].title);
  };

  return (
    <div className="bg-gray-50">
      {/* ----- Hero Section ----- */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-6 gap-6">
        {/* Sidebar with Categories */}
        <aside className="w-full md:w-1/4 bg-white border border-gray-200 rounded-lg p-6 overflow-auto">
          <h3 className="font-bold text-xl mb-4">Categories</h3>
          <table className="table-auto w-full border-collapse">
            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={index}
                  className="hover:bg-yellow-50 cursor-pointer transition-colors duration-300"
                >
                  <td className="border-b border-gray-200 py-2 px-4 text-gray-700 font-medium">
                    {category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>

        {/* Hero Slider */}
        <section className="flex-1 relative overflow-hidden group rounded-lg shadow-lg bg-white p-6 md:p-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 bg-yellow-500 shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-80 hover:opacity-100 transition duration-300 z-10"
          >
            <SlArrowLeft size={28} />
          </button>

          {/* Slide Content */}
          <div
            key={currentIndex}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 transform transition-all duration-700 ease-out ${
              slideIn
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Text */}
            <div className="space-y-4 md:max-w-md text-center md:text-left">
              <h4 className="text-yellow-500 font-semibold tracking-wide">
                {heroBlocks[currentIndex].subtitle}
              </h4>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
                {heroBlocks[currentIndex].title}
              </h1>
              <p className="text-lg text-gray-600">
                {heroBlocks[currentIndex].discount}
              </p>
              <button
                type="button"
                onClick={handleBuyNow}
                className="bg-yellow-500 text-black px-6 py-3 font-bold rounded shadow hover:bg-yellow-600 transition transform hover:scale-105"
              >
                BUY NOW
              </button>
            </div>

            {/* Image */}
            <img
              src={heroBlocks[currentIndex].img}
              alt={heroBlocks[currentIndex].title}
              className={`w-full md:w-[400px] h-[400px] object-contain rounded-lg shadow-xl transition-transform duration-700 ease-out ${
                imgEffect
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-5 opacity-0 scale-90"
              }`}
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 bg-yellow-500 shadow-lg p-3 rounded-full opacity-0 group-hover:opacity-80 hover:opacity-100 transition duration-300 z-10"
          >
            <SlArrowRight size={28} />
          </button>
        </section>
      </div>

      {/* ----- Home Sections Below Hero ----- */}
      <Section2 />
      <Services />
      <BestSellingProducts />
      <ProductShowcase />
    </div>
  );
};

export default WelcomePage;
