import React from "react";

const Orders = () => {
  const orders = [
    { id: 101, customer: "John Doe", total: "$120.00", date: "2025-09-19", status: "Shipped" },
    { id: 102, customer: "Jane Smith", total: "$80.00", date: "2025-09-18", status: "Pending" },
    { id: 103, customer: "Bob Johnson", total: "$200.00", date: "2025-09-17", status: "Delivered" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td className="border p-2">{o.id}</td>
              <td className="border p-2">{o.customer}</td>
              <td className="border p-2">{o.total}</td>
              <td className="border p-2">{o.date}</td>
              <td className="border p-2">{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
