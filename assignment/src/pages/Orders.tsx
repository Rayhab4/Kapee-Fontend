import React, { useEffect, useState } from "react";
import axios from "axios";

interface OrderItem {
  productId: {
    name: string;
    price: number;
  };
  quantity: number;
  priceAtPurchase: number;
}

interface Order {
  _id: string;
  userId: {
    name: string;
    email: string;
  };
  items: OrderItem[];
  totalPrice: number;
  status: string;
  createdAt: string;
}

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/order", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Items</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2">{order._id}</td>
              <td className="px-4 py-2">{order.userId.name} ({order.userId.email})</td>
              <td className="px-4 py-2">
                {order.items.map((item, index) => (
                  <div key={index}>
                    {item.productId.name} x {item.quantity} (${item.priceAtPurchase})
                  </div>
                ))}
              </td>
              <td className="px-4 py-2 font-bold">${order.totalPrice}</td>
              <td className={`px-4 py-2 font-semibold ${
                order.status === "completed" ? "text-green-600" :
                order.status === "pending" ? "text-yellow-600" :
                "text-red-600"
              }`}>
                {order.status}
              </td>
              <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
