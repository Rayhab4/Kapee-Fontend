import React from "react";

const Integrations = () => {
  const integrations = [
    { id: 1, service: "PayPal", status: "Connected" },
    { id: 2, service: "Stripe", status: "Disconnected" },
    { id: 3, service: "Google Analytics", status: "Connected" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Integrations</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Service</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((i) => (
            <tr key={i.id}>
              <td className="border p-2">{i.id}</td>
              <td className="border p-2">{i.service}</td>
              <td className="border p-2">{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Integrations;
