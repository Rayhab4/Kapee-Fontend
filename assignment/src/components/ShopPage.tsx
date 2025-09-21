// src/components/ShopPage.tsx
import React from "react";

const ShopPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Speaker",
      price: "$120.00",
      img: "https://i.pinimg.com/736x/fb/5c/3b/fb5c3bfae2d9fa96292c9a2c6c6ac0c7.jpg",
    },
    {
      id: 2,
      name: "Smartphone Pro X",
      price: "$899.00",
      img: "https://i.pinimg.com/736x/43/19/64/43196464c93392764f44b8e5b3880a08.jpg",
    },
    {
      id: 3,
      name: "Noise Cancelling Headphones",
      price: "$250.00",
      img: "https://i.pinimg.com/736x/29/8e/fd/298efd12dbd33cc23a80d62b295c82c5.jpg",
    },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <p className="text-gray-600 mb-8">
        Explore our wide range of products available for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-yellow-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
