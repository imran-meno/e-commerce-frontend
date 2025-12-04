import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './signup.css'
function Login() {
  const navigate = useNavigate();

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const HandleSumbit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Save full user object in localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      navigate("/home");

      Setemail("");
      Setpassword("");
    } catch (err) {
     
      alert("Login failed");
    }
  };
  const GoToLogout=()=>{
    navigate('/signup')
  }

  return (
    <>
      <div className="signup_main">
        <div className="signup_form">
          <h2>Login into iShop</h2>

          <form onSubmit={HandleSumbit}>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
           <p onClick={GoToLogout}>I don't have Account</p>
        </div>
       
      </div>
    </>
  );
}

export default Login;
