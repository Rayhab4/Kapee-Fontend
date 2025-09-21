import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple localStorage storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.find((user: any) => user.email === email);
    if (exists) {
      alert("Account already exists! Try logging in.");
      navigate("/login");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
