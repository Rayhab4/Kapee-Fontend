import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthResponse {
  message: string;
  token: string;
  role: string;
}

const SignupPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (emailInput: string, passwordInput: string) => {
    const normalizedEmail = emailInput.toLowerCase();
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: normalizedEmail, password: passwordInput }),
    });
    const data: AuthResponse = await res.json();

    if (!res.ok) {
      alert(data.message);
      return false;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);

    if (data.role === "admin") navigate("/dashboard");
    else navigate("/");

    return true;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const normalizedEmail = email.toLowerCase();
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: normalizedEmail, password, role: "user" }),
      });

      const data: AuthResponse = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ Auto login after signup
      await handleLogin(normalizedEmail, password);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-2 rounded"
            required
          />
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
            {loading ? "Please wait..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-yellow-500 font-semibold"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
