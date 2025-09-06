import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HotDealsSection: React.FC = () => {
  return (
    <section className="px-6 py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HOT DEALS */}
        <div className="border border-gray-300 rounded p-4 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">
            HOT DEALS
          </h2>

          <div className="flex flex-col items-center">
            <img
              src="https://i.pinimg.com/736x/2e/35/55/2e3555ee5674ccef3be4e734bb9a5d24.jpg"
              alt="Apple Watch Series 5"
              className="w-50 h-60 object-contain mb-4"
            />
            <p className="text-sm text-gray-500">ELECTRONICS</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Apple Watch Series 5
            </h3>
            <p className="mt-1 text-gray-700">
              <span className="line-through mr-2 text-gray-400">$599.00</span>
              <span className="text-green-600 font-semibold">$499.00</span>
            </p>
            <p className="text-sm text-green-500 font-semibold">17% Off</p>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded h-2 mt-4">
              <div className="bg-blue-500 h-2 rounded w-2/3"></div>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-600 mt-1">
              <span>Already Sold: 50</span>
              <span>Available: 75</span>
            </div>
          </div>
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-500 pb-1">
              FEATURED PRODUCTS
            </h2>
            <button className="text-sm text-blue-600 font-semibold hover:underline">
              VIEW ALL
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
              <SlArrowLeft className="text-gray-700" />
            </button>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
              {[
                {
                  name: "Apple Watch Series 5",
                  price: "$499.00",
                  img: "https://i.pinimg.com/736x/9c/67/c1/9c67c1a189024fbb64ab2e96fd76bcd6.jpg",
                },
                {
                  name: "JBL Wireless Bluetooth",
                  price: "$96.00",
                  img: "https://i.pinimg.com/736x/32/c6/57/32c657ab2b9600187dbee44b13b7e2a0.jpg",
                },
                {
                  name: "JBL On-Ear Headphones",
                  price: "$124.00",
                  img: "https://i.pinimg.com/736x/dc/7f/8e/dc7f8e1d2f227f4d350c7d2ca03b8c6a.jpg",
                },
                {
                  name: "Samsung Gear VR",
                  price: "$18.00",
                  img: "https://i.pinimg.com/736x/fd/1a/ce/fd1ace80c5eccdcac855ec024a08f545.jpg",
                },
                {
                  name: "Samsung Galaxy S20",
                  price: "$250.00",
                  img: "https://i.pinimg.com/1200x/8a/a6/67/8aa6671b08c889f38797bb09a2ad232f.jpg",
                },
                {
                  name: "Samsung Gear 360 Camera",
                  price: "$29.00",
                  img: "https://i.pinimg.com/736x/6a/29/14/6a2914fce975a64a53619cd738e08dd9.jpg",
                },
                {
                  name: "Apple Watch Series 5 Black",
                  price: "$599.00",
                  img: "https://i.pinimg.com/736x/bc/78/56/bc7856a763b77e70c6347313c272fbe5.jpg",
                },
                {
                  name: "Xbox One Wireless Controller",
                  price: "$25.00",
                  img: "https://i.pinimg.com/736x/7b/1c/d2/7b1cd29c9554c7c78e5c636100065aad.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border p-3 rounded shadow-sm hover:shadow-md transition bg-white"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-contain mx-auto mb-3"
                  />
                  <p className="text-xs text-gray-500">ELECTRONICS</p>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm font-bold text-gray-900">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">
              <SlArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
