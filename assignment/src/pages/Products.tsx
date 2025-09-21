import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const AdminProductDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [editingId, setEditingId] = useState<number | null>(null);

  // Load products from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddOrEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) return;

    if (editingId !== null) {
      // Edit existing product
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, name, category, price, stock } : p
        )
      );
      setEditingId(null);
    } else {
      // Add new product
      const newProduct: Product = {
        id: Date.now(),
        name,
        category,
        price,
        stock,
      };
      setProducts((prev) => [...prev, newProduct]);
    }

    setName("");
    setCategory("");
    setPrice(0);
    setStock(0);
  };

  const handleEditClick = (product: Product) => {
    setEditingId(product.id);
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setStock(product.stock);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin Product Dashboard</h2>

      {/* Form */}
      <form
        onSubmit={handleAddOrEdit}
        className="mb-6 p-4 bg-white rounded shadow-md grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded col-span-1 md:col-span-1"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-2 py-1 rounded col-span-1 md:col-span-1"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border px-2 py-1 rounded col-span-1 md:col-span-1"
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          className="border px-2 py-1 rounded col-span-1 md:col-span-1"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 col-span-1 md:col-span-1"
        >
          {editingId !== null ? "Update" : "Add Product"}
        </button>
      </form>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Stock</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center hover:bg-yellow-50">
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">{product.price}</td>
                <td className="px-4 py-2 border">{product.stock}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductDashboard;
