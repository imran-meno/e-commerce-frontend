import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import './NavBar.css'


function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(false); // ✅ define state
  const navigate=useNavigate()
    const HandleSumbit=(e)=>{
      e.preventDefault()
     
        navigate('/viewcart')
    }
    const HandleClick=(e)=>{
      e.preventDefault()
     
        navigate('/home')
    }

  return (
    <>
      <div className="main_nav">
        <div className="logo_nav" onClick={HandleClick}>
          <h3>iShop</h3>
        </div>

        <div className="link_nav">
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
          </ul>
        </div>

        <div className="search_nav">
          <div className="input_section">
            <input type="text" placeholder="What are you looking for?" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="search_sec">
            <i className="fa-solid fa-heart"></i>
            <i onClick={HandleSumbit} className="fa-solid fa-cart-shopping"></i>

            {/* User Icon */}
            <i
              id="user"
              className="fa-solid fa-user"
              onClick={() => setOpenDropdown(!openDropdown)}
              style={{ cursor: "pointer" }}
            ></i>

            {/* Dropdown Menu */}
            {openDropdown && (
              <div className="user_dropdown">
                <ul>
                  <li><Link to="/profile">Manage Account</Link></li>
                  <li><Link to="/orders">My Orders</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
