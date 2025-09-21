import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Box, Users, BarChart2, Percent, Link, HelpCircle, Settings } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <Home />, path: "/Dashboard" },
  { label: "Products", icon: <Box />, path: "/Dashboard/products" },
  { label: "Customers", icon: <Users />, path: "/Dashboard/customers" },
  { label: "Reports", icon: <BarChart2 />, path: "/Dashboard/reports" },
  { label: "Discounts", icon: <Percent />, path: "/Dashboard/discounts" },
  { label: "Integrations", icon: <Link />, path: "/Dashboard/integration" },
  { label: "Help", icon: <HelpCircle />, path: "/Dashboard/help" },
  { label: "Settings", icon: <Settings />, path: "/Dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-yellow-500 shadow-md h-screen p-4">
      <div className="text-xl font-bold text-white mb-6">Kapee</div>
      <nav className="space-y-2">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-yellow-200 text-yellow-800 font-semibold"
                  : "text-white hover:bg-yellow-400"
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
}
