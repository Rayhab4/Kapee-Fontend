import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">
      ADMIN
      </h1>
      <p>Welcome! Here you can view your products, sales, members, transactions, and reports.</p>
      <table className="table-auto w-full mt-6 border border-gray-300">
        <thead>
          <tr className="bg-yellow-100">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">John Doe</td>
            <td className="px-4 py-2 border">john@example.com</td>
            <td className="px-4 py-2 border">Admin</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Jane Smith</td>
            <td className="px-4 py-2 border">jane@example.com</td>
            <td className="px-4 py-2 border">Manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
