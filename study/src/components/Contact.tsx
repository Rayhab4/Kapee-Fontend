// src/pages/Contact.js
import React from "react";

export default function Contact() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
