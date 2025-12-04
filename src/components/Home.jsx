import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://mern-ecommerce-oqzg.onrender.com"; // Your Render backend

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`);
        // Check if response is an array
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Products API did not return an array:", res.data);
          setProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const SumbitHandler = async (ProductId, e) => {
    e.stopPropagation(); // prevent parent div click

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user._id) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      await axios.post(`${API_URL}/cart`, {
        user_id: user._id,
        product_id: ProductId,
      });

      alert("Item added to cart");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Failed to add item to cart");
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;
  if (products.length === 0) return <p>No products available.</p>;

  return (
    <div className="main_items">
      <div className="main_item_container">
        {products.map((item) => (
          <div
            key={item._id}
            className="item_main"
            onClick={() => handleProductClick(item._id)}
          >
            <div className="image_background">
              <img
                src={item.product_image}
                alt={item.product_name}
                className="product_img"
              />
            </div>

            <p className="product_name">{item.product_name}</p>
            <p className="product_price">${item.product_price}</p>

            <button
              className="add_btn"
              onClick={(e) => SumbitHandler(item._id, e)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
