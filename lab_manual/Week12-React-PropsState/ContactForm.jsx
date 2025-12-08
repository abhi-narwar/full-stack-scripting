import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(form);
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Message: {submitted.message}</p>
        </div>
      )}
    </div>
  );
}
