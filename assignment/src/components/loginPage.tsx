import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthResponse {
  message: string;
  token: string;
  role: string;
  user: User;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (emailInput: string, passwordInput: string) => {
    const normalizedEmail = emailInput.toLowerCase();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail, password: passwordInput }),
      });

      const data = await res.json().catch(() => ({ message: "Unknown error" }));

      if (!res.ok) {
        // If user does not exist, redirect to Sign Up
        if (data.message === "Invalid email or password") {
          alert("No account found with this email. Please Register...");
          navigate("/signup", { state: { email: normalizedEmail } }); // Pass email to Sign Up
          return false;
        }

        alert(data.message || "Login failed");
        return false;
      }

      const authData: AuthResponse = data;

      // Save token, role, and user info
      localStorage.setItem("token", authData.token);
      localStorage.setItem("role", authData.role);
      localStorage.setItem("user", JSON.stringify(authData.user));

      // Navigate based on role
      if (authData.role === "admin") navigate("/dashboard");
      else navigate("/");

      return true;
    } catch (err: any) {
      alert("Network error: " + err.message);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await handleLogin(email, password);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded font-bold hover:bg-yellow-600 transition"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-yellow-500 font-semibold"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
