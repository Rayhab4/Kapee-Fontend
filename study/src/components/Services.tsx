// src/pages/Services.js
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Building modern web applications with React, Node.js, and more.",
      img: "https://via.placeholder.com/300x200?text=Web+Dev",
    },
    {
      title: "Mobile Apps",
      desc: "Creating mobile-friendly applications for Android and iOS.",
      img: "https://via.placeholder.com/300x200?text=Mobile+Apps",
    },
    {
      title: "Cloud Solutions",
      desc: "Deploying scalable and secure cloud systems.",
      img: "https://via.placeholder.com/300x200?text=Cloud",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
