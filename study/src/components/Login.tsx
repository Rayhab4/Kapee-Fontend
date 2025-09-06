// src/pages/Login.js
import React from "react";

export default function Login() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
