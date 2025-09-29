import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-48 h-48 object-contain rounded-lg mb-4"
      />
      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={decreaseQty}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          −
        </button>
        <span className="px-3 font-semibold">{quantity}</span>
        <button
          onClick={increaseQty}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>

        {onViewDetails && (
          <button
            onClick={() => onViewDetails(product)}
            className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

const WelcomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/api/products", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleAddToCart = async (product: Product, quantity: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to add items to cart.");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: { productId: product._id, quantity },
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Failed to add to cart");
      }

      alert(data.message || "Added to cart!");
    } catch (err: any) {
      console.error("Add to cart failed:", err);
      alert(err.message || "Failed to add to cart");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-56 h-56 object-contain mx-auto mb-4"
            />
            <div className="space-y-2">
              <p>
                <strong>Description:</strong> {selectedProduct.description}
              </p>
              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>
              <p>
                <strong>Price:</strong> ${selectedProduct.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
