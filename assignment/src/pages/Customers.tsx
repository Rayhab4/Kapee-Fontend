import React from "react";

const Customers = () => {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555", status: "Active" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.id}</td>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.phone}</td>
              <td className="border p-2">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
