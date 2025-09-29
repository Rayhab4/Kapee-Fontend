import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  status?: string;
}

const Users: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      // No token or user info, redirect to login
      navigate("/login");
      return;
    }

    try {
      const parsedUser: User = JSON.parse(storedUser);
      // Add a status field for display purposes
      parsedUser.status = "Active";
      setUser(parsedUser);
    } catch (err: any) {
      console.error("Failed to parse user from localStorage:", err);
      setError("Failed to load user info.");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) return <p className="text-center mt-10">Loading user...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!user) return <p className="text-center mt-10">No user found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Account</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className={user.status === "Active" ? "bg-green-50" : ""}>
            <td className="border p-2">{user._id}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
