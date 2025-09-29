import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  quantity: number;
}

interface CartItem {
  _id: string;
  product: Product;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCartItems = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to view your cart.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Make sure token is sent correctly
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          // Token missing/expired
          localStorage.removeItem("token");
          alert("Session expired, please login again.");
          navigate("/login");
        } else {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to fetch cart items");
        }
        return;
      }

      const data = await res.json();
      setCartItems(data.data || []);
    } catch (err: any) {
      console.error("Cart fetch error:", err);
      alert(err.message || "Failed to fetch cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Handle order
  const handleOrder = async (item: CartItem) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to make an order.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: item.product._id, quantity: item.quantity }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to place order");
      }

      const data = await res.json();
      alert(data.message || "Order placed successfully!");
      fetchCartItems(); // Refresh cart after order
    } catch (err: any) {
      console.error("Order failed:", err);
      alert(err.message || "Order failed");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading cart...</p>;
  if (cartItems.length === 0) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white"
          >
            <img
              src={item.product.imageUrl}
              alt={item.product.name}
              className="w-48 h-48 object-contain rounded-lg mb-4"
            />
            <h2 className="font-bold text-lg mb-2">{item.product.name}</h2>
            <p className="text-gray-700 mb-2">Price: ${item.product.price}</p>
            <p className="text-gray-700 mb-4">Quantity: {item.quantity}</p>
            <button
              onClick={() => handleOrder(item)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
