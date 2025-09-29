import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Box, Users, BarChart2, Percent, Settings, ShoppingCart, CreditCard } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <Home />, path: "/dashboard" },
  { label: "Products", icon: <Box />, path: "/dashboard/products" },
  { label: "Users", icon: <Users />, path: "/dashboard/users" },
  { label: "Reports", icon: <BarChart2 />, path: "/dashboard/reports" },
  { label: "Cart", icon: <ShoppingCart />, path: "/dashboard/cart" }, // Admin Cart
  { label: "Orders", icon: <CreditCard />, path: "/dashboard/orders" }, // Admin Orders
  { label: "Discounts", icon: <Percent />, path: "/dashboard/discounts" },
  { label: "Settings", icon: <Settings />, path: "/dashboard/settings" },
];

const DashboardSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition ${
                isActive ? "bg-gray-200 font-bold" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
