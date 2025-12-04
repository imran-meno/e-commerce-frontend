import { useState, useEffect } from "react";
import axios from "axios";
import './Profile.css'

function Profile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Load user profile
  useEffect(() => {
    const userEmail = localStorage.getItem("email");

    if (!userEmail) {
      console.log("No email found in localStorage");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/profile/${userEmail}`);
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address || "");
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  // Update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("http://localhost:3000/profile/update", {
        name,
        email,
        address
      });

      alert("Profile updated!");
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="main_profile">
        
        <form onSubmit={handleSubmit}>
          
          <input 
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="email"
            value={email}
            disabled
          />

          <input 
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit">Save Changes</button>
        </form>

      </div>
    </>
  );
}

export default Profile;
