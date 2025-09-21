import React from "react";

const Settings = () => {
  const settings = [
    { id: 1, option: "Profile Settings", value: "Enabled" },
    { id: 2, option: "Notifications", value: "Disabled" },
    { id: 3, option: "Two-Factor Auth", value: "Enabled" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Option</th>
            <th className="border p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.id}</td>
              <td className="border p-2">{s.option}</td>
              <td className="border p-2">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
