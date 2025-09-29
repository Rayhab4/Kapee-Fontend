import React, { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  status?: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch all users
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      const usersArray: User[] = data.users || (data.user ? [{ ...data.user, status: "Active" }] : []);
      setUsers(usersArray);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Call fetchUsers manually after signup/login to refresh dashboard
  // Example: after login function completes, just call fetchUsers()

  if (loading) return <p className="text-center mt-10">Loading users...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (users.length === 0) return <p className="text-center mt-10">No users found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Customers</h2>
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
          {users.map((user) => (
            <tr key={user._id} className={user.status === "Active" ? "bg-green-50" : ""}>
              <td className="border p-2">{user._id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.status || "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
