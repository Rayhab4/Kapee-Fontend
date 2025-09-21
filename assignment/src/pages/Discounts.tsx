import React from "react";

const Discounts = () => {
  const discounts = [
    { id: 1, product: "Apple Watch", discount: "10%", validTill: "2025-09-25" },
    { id: 2, product: "Xbox One", discount: "15%", validTill: "2025-09-22" },
    { id: 3, product: "JBL Headphones", discount: "5%", validTill: "2025-09-30" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Discounts</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Valid Till</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((d) => (
            <tr key={d.id}>
              <td className="border p-2">{d.id}</td>
              <td className="border p-2">{d.product}</td>
              <td className="border p-2">{d.discount}</td>
              <td className="border p-2">{d.validTill}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discounts;
