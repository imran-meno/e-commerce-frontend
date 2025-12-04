  import { useState } from 'react'
  import axios from 'axios'
  import './Admin.css'

  function Admin() {

    const [pro_name, Set_pro_name] = useState('')
    const [pro_price, Set_pro_price] = useState('')
    const [pro_image, Set_pro_image] = useState(null) 
    const API_URL = "https://mern-ecommerce-oqzg.onrender.com";


    const HandleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("pro_name", pro_name);
      formData.append("pro_price", pro_price);
      formData.append("pro_image", pro_image);

      try {
        const res = await axios.post(
          `${API_URL}/admin`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" }
          }
        );
        alert('data addedd successfully')

        
      } catch (err) {
      
      }
    };

    return (
      <>
        <div className="main_admin">
          <h1>Admin Page</h1>

          <form onSubmit={HandleSubmit} className="main_form">
            <input
              type="text"
              value={pro_name}
              onChange={(e) => Set_pro_name(e.target.value)}
              placeholder="Product Name"
            />

            <input
              type="number"
              value={pro_price}
              onChange={(e) => Set_pro_price(e.target.value)}
              placeholder="Product Price"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => Set_pro_image(e.target.files[0])}
            />

            <button type="submit">Add Product</button>
          </form>
        </div>
      </>
    );
  }

  export default Admin;
