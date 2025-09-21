import React from "react";
import { activeUsers } from "../mockData";

interface User {
  country: string;
  percentage: number;
}

const ActiveUsers: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h3 className="font-semibold mb-2">Active Users</h3>
      <div className="text-2xl font-bold">2,758</div>
      <p className="text-green-600 text-sm mb-4">+8.02% from last month</p>
      {activeUsers.map((user: User, idx: number) => (
        <div key={idx} className="mb-2">
          <div className="flex justify-between text-sm">
            <span>{user.country}</span>
            <span>{user.percentage}%</span>
          </div>
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${user.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveUsers;
