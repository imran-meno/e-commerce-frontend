import { useState } from 'react';
import './contact.css';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values from form inputs
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const msg = e.target.msg.value.trim();

    if (name && email && phone && msg) {
      setMessage('Thanks for your feedback! We will get back to you soon.');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="main_contact">
      <div className="contact_form_container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Your Phone" required />
          <textarea name="msg" cols={80} rows={10} placeholder="Your Message" required />
          <button type="submit" className="contact_btn">Submit</button>
        </form>

        {/* Display message only if all fields are filled */}
        {message && <p className="feedback_message">{message}</p>}
      </div>
    </div>
  );
}

export default Contact;
