import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";
import { Navigate } from "react-router-dom";
function Shop() {
  const { id } = useParams(); // Get /product/:id
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(navigator)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading product...</h2>;
  }
  //clicking the shop now button

  const shop_btn=()=>{
const user=JSON.parse(localStorage.getItem('user'))
  if(!user){
    alert('please login first')
    navigate('/login')
    
  }
  else{
    navigate('/address')
  }
  }
  

  return (
    <>
      <div className="main_shop">
        <div className="shop_image_back">
          <img src={product.product_image} alt={product.product_name} />
        </div>

        <div className="shop_detail">
          <h2>{product.product_name}</h2>
          <p className="shop_price">${product.product_price}</p>
          <p className="shop_desc">{product.product_description}</p>

          <button onClick={shop_btn} className="buy_btn">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default Shop;
