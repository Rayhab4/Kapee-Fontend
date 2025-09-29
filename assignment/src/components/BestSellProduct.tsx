import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

const BestSellingProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return navigate("/login");

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, productId: product._id, quantity: 1 }),
      });
      if (!res.ok) throw new Error("Failed to add to cart");
      alert(`${product.name} added to cart ✅`);
    } catch (err: any) {
      alert(err.message || "Error adding to cart");
    }
  };

  const handleBuyNow = (product: Product) => {
    localStorage.setItem("buyNowProduct", JSON.stringify(product));
    navigate("/login"); // or wherever your buy now page is
  };

  if (loading) return <p>Loading best selling products...</p>;
  if (products.length === 0) return <p>No products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="border rounded p-4 shadow hover:shadow-lg transition flex flex-col justify-between"
        >
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-60 h-60 object-cover mb-4 rounded"
            />
          )}
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-gray-700 font-semibold">${product.price}</p>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyNow(product)}
              className="flex-1 bg-yellow-500 text-black px-4 py-2 rounded font-bold hover:bg-yellow-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSellingProducts;
