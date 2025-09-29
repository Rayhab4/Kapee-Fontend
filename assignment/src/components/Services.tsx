import React, { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface Product {
  _id: string;
  name: string;
  price: number;
  img: string;
  category: string;
}

const HotDealsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  // Filter products with category Electronics for Hot Deals
  const hotDeals = products.filter((p) => p.category.toLowerCase() === "electronics");

  // Featured products (all others)
  const featuredProducts = products.filter((p) => p.category.toLowerCase() !== "electronics");

  return (
    <section className="px-6 py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* HOT DEALS */}
        <div className="border border-gray-300 rounded p-4 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">
            HOT DEALS
          </h2>

          {hotDeals[0] && (
            <div className="flex flex-col items-center">
              <img
                src={hotDeals[0].img}
                alt={hotDeals[0].name}
                className="w-[200px] h-[240px] object-contain mb-4"
              />
              <p className="text-sm text-gray-500">{hotDeals[0].category}</p>
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {hotDeals[0].name}
              </h3>
              <p className="mt-1 text-gray-700">
                <span className="line-through mr-2 text-gray-400">${(hotDeals[0].price * 1.2).toFixed(2)}</span>
                <span className="text-green-600 font-semibold">${hotDeals[0].price}</span>
              </p>
              <p className="text-sm text-green-500 font-semibold">17% Off</p>
            </div>
          )}
        </div>

        {/* FEATURED PRODUCTS */}
        <div className="col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-500 pb-1">
              FEATURED PRODUCTS
            </h2>
          </div>

          <div className="relative">
            <SlArrowLeft className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 cursor-pointer text-gray-700 z-10" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
              {featuredProducts.map((item) => (
                <div
                  key={item._id}
                  className="border p-3 rounded shadow-sm hover:shadow-md transition bg-white flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 object-contain mb-3"
                  />
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <h3 className="text-sm font-semibold text-gray-800 truncate text-center">
                    {item.name}
                  </h3>
                  <p className="text-sm font-bold text-gray-900">${item.price}</p>
                </div>
              ))}
            </div>

            <SlArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 cursor-pointer text-gray-700 z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
