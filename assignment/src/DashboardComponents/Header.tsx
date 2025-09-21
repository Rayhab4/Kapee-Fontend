import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search stock, order, etc"
          className="pl-10 pr-4 py-2 border rounded-lg w-72"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>
    </header>
  );
}
