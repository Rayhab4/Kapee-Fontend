import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!user) {
      alert("No account found! Please register first.");
      navigate("/signup");
      return;
    }

    alert(`Welcome back, ${user.name}!`);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-600 mb-6">
          Login
        </h2>

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
          Login
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-600 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
