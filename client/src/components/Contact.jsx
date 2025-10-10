// src/components/Contact.jsx
import { useState } from "react";
import axios from "axios";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use your Render backend URL after deployment
      await axios.post("https://myportfolio-backend-8uui.onrender.com/api/users", form);

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        setStatus("⚠️ You already submitted a message!");
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        {status && <p className="form-status">{status}</p>}

        <div className="social-icons">
          <a href="https://www.instagram.com/parvee___z/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={25} />
          </a>

          <a href="https://wa.me/9741387341" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp size={25} />
          </a>

          <a href="https://in.linkedin.com/in/mohammed-parveez-8b9b86253" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={25} />
          </a>

          <a href="https://github.com/Parveez9741" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
    </section>
  );
}
