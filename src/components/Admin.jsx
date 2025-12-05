import { useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
  const [pro_name, setProName] = useState("");
  const [pro_price, setProPrice] = useState("");
  const [pro_image, setProImage] = useState(null);

  // Render Backend URL
  const API_URL = "https://e-commerce-backend-ero2.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pro_name || !pro_price || !pro_image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("pro_name", pro_name);
    formData.append("pro_price", pro_price);
    formData.append("pro_image", pro_image);

    try {
      
      const res = await axios.post(`${API_URL}/admin`, formData);

      alert("Product added successfully!");

      setProName("");
      setProPrice("");
      setProImage(null);
    } catch (err) {
      console.error(err);
      alert(
        "Error uploading product: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="main_admin">
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit} className="main_form">
        <input
          type="text"
          value={pro_name}
          onChange={(e) => setProName(e.target.value)}
          placeholder="Product Name"
          required
        />

        <input
          type="number"
          value={pro_price}
          onChange={(e) => setProPrice(e.target.value)}
          placeholder="Product Price"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProImage(e.target.files[0])}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Admin;
