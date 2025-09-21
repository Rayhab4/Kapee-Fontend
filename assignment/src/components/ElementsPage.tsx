// src/components/ElementsPage.tsx
import React, { useState } from "react";
import { ShoppingBag, Info, Heart } from "lucide-react"; // icons
import picture9 from "../assets/picture9.jpg"; // local image

interface ProductCard {
  id: number;
  name: string;
  price: string;
  image: string;
}

type AlertType = "success" | "error" | "info";

interface ButtonAction {
  id: number;
  label: string;
  type: AlertType;
  message: string;
  icon?: React.ReactNode;
  color: string;
  hoverColor: string;
}

const ElementsPage: React.FC = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<AlertType | null>(null);

  // Mock data for product cards
  const products: ProductCard[] = [
    {
      id: 1,
      name: "Classic Sneakers",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Elegant Watch",
      price: "$120.00",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Leather Backpack",
      price: "$95.50",
      image: picture9,
    },
  ];

  // Buttons data
  const buttonActions: ButtonAction[] = [
    {
      id: 1,
      label: "Shop Now",
      type: "info",
      message: "🛍️ Discover the latest arrivals today!",
      icon: <ShoppingBag className="inline-block w-4 h-4 mr-2" />,
      color: "bg-yellow-500 text-white",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      id: 2,
      label: "Learn More",
      type: "error",
      message: "⚠️ This feature is not available yet.",
      icon: <Info className="inline-block w-4 h-4 mr-2" />,
      color: "bg-gray-200 text-gray-700",
      hoverColor: "hover:bg-gray-300",
    },
    {
      id: 3,
      label: "Add to Wishlist",
      type: "success",
      message: "❤️ Added to your wishlist!",
      icon: <Heart className="inline-block w-4 h-4 mr-2 text-red-500" />,
      color: "border border-yellow-500 text-yellow-500",
      hoverColor: "hover:bg-yellow-50",
    },
  ];

  // Function to trigger alerts
  const showAlert = (type: AlertType, message: string) => {
    setAlertType(type);
    setAlertMessage(message);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 3000);
  };

  return (
    <div className="px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Elements Showcase
      </h1>
      {/* Alert Notification */}
      {alertMessage && (
        <div
          className={`mb-6 px-4 py-2 rounded text-sm font-medium ${
            alertType === "success"
              ? "bg-green-100 text-green-800"
              : alertType === "error"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {alertMessage}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Buttons */}
        <div className="p-6 border rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            {buttonActions.map((btn) => (
              <button
                key={btn.id}
                onClick={() => showAlert(btn.type, btn.message)}
                className={`${btn.color} ${btn.hoverColor} px-4 py-2 rounded flex items-center`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="p-6 border rounded-lg shadow-sm bg-white md:col-span-2">
          <h1 className="text-4xl font-bold mb-2">New Arrivals</h1>
          <h2 className="text-3xl font-semibold mb-2">Summer Collection 2025</h2>
          <h3 className="text-2xl font-medium mb-2">Why Choose Us</h3>
          <p className="mt-2 text-gray-600">
            Discover the latest fashion trends with exclusive deals. Our store
            offers high-quality products at affordable prices, ensuring you look
            stylish every season.
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
            <li>✔ Free shipping on all orders over $50</li>
            <li>✔ 30-day hassle-free returns</li>
            <li>✔ 24/7 customer support</li>
            <li>✔ Exclusive discounts for members</li>
          </ul>
        </div>

        {/* Product Cards */}
        <div className="p-6 border rounded-lg shadow-sm bg-white md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Product Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow hover:shadow-md transition p-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="rounded-lg mb-3 w-full h-40 object-cover"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-yellow-600 font-bold">{product.price}</p>
                <button
                  onClick={() =>
                    showAlert("success", `✅ ${product.name} added to cart!`)
                  }
                  className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded flex items-center"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="p-6 border rounded-lg shadow-sm bg-white md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Testimonials</h2>
          <div className="space-y-4">
            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
              "Amazing quality and fast delivery. I love shopping here!"
              <span className="block text-sm text-gray-500 mt-1">
                - Sarah K.
              </span>
            </blockquote>
            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
              "Great deals on trending items. Highly recommended!"
              <span className="block text-sm text-gray-500 mt-1">
                - James P.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementsPage;
