import axios from 'axios';
import './Cart.css';
import { useEffect, useState } from 'react';

function Cart() {
  const [CartItem, SetCartItem] = useState([]);
const API_URL= "https://e-commerce-backend-ero2.onrender.com"

  const fetchCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) return;

      const res = await axios.get(`${API_URL}/viewcart`, {
        params: { userId: user._id }
      });
      SetCartItem(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  
  const updateQuantity = (id, newQty) => {
    SetCartItem(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: Number(newQty) } 
          : item
      )
    );
  };

  return (
    <div className="main_cart">
      <div className="cart_header">
        <div className="product">Product</div>
        <div className="price">Price</div>
        <div className="quantity">Quantity</div>
        <div className="subtotal">Subtotal</div>
      </div>

      {CartItem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        CartItem.map(item => (
          <div className="cart_row" key={item._id}>
            <div className="product">
              <img
                src={item.product_id.product_image}
                alt={item.product_id.product_name}
              />
              {item.product_id.product_name}
            </div>

            <div className="price">${item.product_id.product_price}</div>

            <div className="quantity">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item._id, e.target.value)
                }
              />
            </div>

            <div className="subtotal">
              ${item.product_id.product_price * item.quantity}
            </div>
          </div>
        ))
      )}

        <div><button className='place_order'>Place Order</button></div>
    </div>
    
  );

}

export default Cart;
