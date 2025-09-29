import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem("userId"); // get logged-in user ID

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data: Product = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const placeOrder = async () => {
    if (!userId) {
      navigate("/login"); // redirect to login if not logged in
      return;
    }
    if (!product) return;

    try {
      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
          userId,
        }),
      });

      if (!res.ok) throw new Error("Failed to place order");
      await res.json();
      alert(`${product.name} ordered successfully ✅`);

      // Clear cart
      await fetch("http://localhost:5000/api/cart/clear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      navigate("/cart"); // cart will be empty
    } catch (err) {
      console.error(err);
      alert("Something went wrong placing the order ❌");
    }
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!product) return <div className="p-6">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name}
          className="w-full max-w-md h-[400px] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-lg text-gray-600">
          {product.description || "No description available."}
        </p>
        <p className="text-2xl font-semibold text-yellow-600">${product.price}</p>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={placeOrder}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={placeOrder}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow font-bold hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
