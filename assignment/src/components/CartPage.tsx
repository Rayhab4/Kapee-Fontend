// src/pages/CartPage.tsx
import React, { useEffect, useState } from "react";

interface CartItem {
  _id: string;
  productId: {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string;
  };
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCartItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cart"); // your cart route
      if (!res.ok) throw new Error("Failed to fetch cart items");
      const data = await res.json();
      setCartItems(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching cart items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemove = async (id: string) => {
    if (!window.confirm("Remove this item from cart?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/cart/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to remove item");
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      alert("Could not remove item");
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0
  );

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                {item.productId.imageUrl && (
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div>
                  <h3 className="font-bold">{item.productId.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.productId.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
