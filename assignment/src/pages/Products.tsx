import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  imageUrl?: string;
}

const API_URL = "http://localhost:5000/api/products";

const AdminProductDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Product>>({});

  // Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const json = await res.json();
      setProducts(Array.isArray(json.data) ? json.data : []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Update product
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.price) {
      alert("Name, description and price are required");
      return;
    }

    try {
      const res = await fetch(editingId ? `${API_URL}/${editingId}` : API_URL, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Action failed");
      }

      alert(`Product ${editingId ? "updated" : "added"} successfully ✅`);
      setForm({});
      setEditingId(null);
      fetchProducts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product._id);
    setForm({ ...product });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      alert("Product deleted ✅");
      fetchProducts();
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Admin Product Dashboard</h2>

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 grid grid-cols-1 md:grid-cols-6 gap-4 bg-white p-4 rounded shadow-md"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name || ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border px-2 py-1 rounded"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description || ""}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border px-2 py-1 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price || ""}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          className="border px-2 py-1 rounded"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={form.category || ""}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.imageUrl || ""}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="text-center hover:bg-yellow-50">
                  <td className="px-4 py-2 border">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-16 w-16 object-cover mx-auto rounded"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.description}</td>
                  <td className="px-4 py-2 border">{product.category || "-"}</td>
                  <td className="px-4 py-2 border">{product.price}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No products available
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
