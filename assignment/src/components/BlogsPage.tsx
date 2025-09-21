// src/components/Blogs.tsx
import React from "react";
import pic1 from "../assets/pic1.png"; 
import pic3 from "../assets/pic3.png";
import pic7 from "../assets/pic7.jpg";

const Blogs: React.FC = () => {
  const posts = [
    {
      title: "Top 5 Smart Wearables of 2025",
      excerpt: "Discover the latest advancements in smart wearables.",
      link: "#",
      image: pic3,
    },
    {
      title: "Choosing the Right Headphones",
      excerpt: "A guide to selecting the perfect headphones.",
      link: "#",
      image: pic1,
    },
    {
      title: "Understanding Bluetooth Speakers",
      excerpt: "Learn how to pick the best Bluetooth speaker.",
      link: "#",
      image: pic7,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <div
            key={i}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Each post gets its own image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-2">{post.excerpt}</p>
              <a href={post.link} className="text-yellow-600 hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
