import { useState } from "react";
import "./Address.css";

function Address() {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, street, city, email, phone } = formData;
    if (name && street && city && email && phone) {
      setMessage("Your Order is placed successfully, Thanks");
      console.log("Billing Info:", formData);
    } else {
      setMessage("");
    }
  };

  return (
    <div className="address-container">
      <h2>Billing / Shipping Address</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Street:
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Town / City:
          <input
            type="text"
            name="city"
            placeholder="Town or City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Display message only if set */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default Address;
