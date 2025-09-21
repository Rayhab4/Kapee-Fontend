// src/components/Contact.tsx
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form:", { name, email, message });
    alert("Message sent! (This is just a demo)");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
          rows={5}
          required
        ></textarea>
        <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
