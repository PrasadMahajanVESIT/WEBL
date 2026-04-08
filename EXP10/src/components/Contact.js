import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}`);
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;