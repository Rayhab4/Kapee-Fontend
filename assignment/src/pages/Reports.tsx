import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

interface ReportData {
  name: string;
  value: number;
}

interface CustomerReportData {
  month: string;
  newCustomers: number;
  returningCustomers: number;
}

const salesData: ReportData[] = [
  { name: "Electronics", value: 120000 },
  { name: "Fashion", value: 90000 },
  { name: "Home & Kitchen", value: 75000 },
  { name: "Books", value: 45000 },
  { name: "Sports", value: 60000 },
];

const customersData: CustomerReportData[] = [
  { month: "Jan", newCustomers: 200, returningCustomers: 150 },
  { month: "Feb", newCustomers: 300, returningCustomers: 220 },
  { month: "Mar", newCustomers: 250, returningCustomers: 180 },
  { month: "Apr", newCustomers: 400, returningCustomers: 350 },
  { month: "May", newCustomers: 320, returningCustomers: 270 },
  { month: "Jun", newCustomers: 450, returningCustomers: 400 },
];

const Reports: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-10">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Reports Dashboard</h2>

      {/* Sales Report Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Sales by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Customer Report Line Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Customer Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={customersData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="newCustomers" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="returningCustomers" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reports;
