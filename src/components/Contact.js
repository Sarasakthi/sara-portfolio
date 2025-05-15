// src/components/Contact.js
import React, { useState } from "react";
import "./Contact.css"; // We'll add styles here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    console.log("Form submitted:", formData);

    try {
      // fake delay for example
      await new Promise((res) => setTimeout(res, 1000));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
    // TODO: Add actual email sending logic or API call here

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page page">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! I’ll get back to you as soon as possible.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name<span>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">
          Message<span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
