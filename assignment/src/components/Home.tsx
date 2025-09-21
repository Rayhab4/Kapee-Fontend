// src/components/Home.tsx
import React from "react";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import picture11 from "../assets/picture11.jpg";
import picture6 from "../assets/picture6.jpg";
import picture7 from "../assets/picture7.jpg";
import picture8 from "../assets/picture8.jpg";

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* ----- Hero Section ----- */}
      <section className="relative h-96">
        <img
          src={picture1}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 bg-black bg-opacity-30 text-white">
          <h1 className="text-5xl font-bold mb-4">Latest Electronics & Gadgets</h1>
          <p className="mb-6 text-lg">Shop the newest tech products at unbeatable prices.</p>
          <a
            href="/products"
            className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* ----- Categories Section ----- */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[picture1, picture2, picture3, picture4].map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition h-40"
            >
              <img src={img} alt={`Category ${index + 1}`} className="w-full h-full object-cover" />
              <span className="absolute bottom-2 left-2 bg-yellow-500 px-2 py-1 rounded text-white font-semibold">
                {["Laptops", "Headphones", "Smartphones", "Accessories"][index]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ----- Featured Products ----- */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[picture8, picture7, picture6, picture11].map((img, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold mb-2">
                {["Laptop Pro 2025", "Noise-Canceling Headphones", "Smartphone X 12", "Wireless Charger"][index]}
              </h3>
              <p className="text-gray-700 mb-2">
                {["$999.00", "$199.00", "$799.00", "$49.00"][index]}
              </p>
              <a href="/products" className="text-yellow-500 hover:underline">Buy Now</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
