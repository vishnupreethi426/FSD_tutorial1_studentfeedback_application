import React, { useState } from "react";

function FeedbackForm({ onAddFeedback }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      contact: formData.contact.trim(),
      message: formData.message.trim()
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.contact || !trimmedData.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    onAddFeedback({
      ...trimmedData,
      submittedAt: new Date().toLocaleString(),
      id: Date.now()
    });

    setFormData({
      name: "",
      email: "",
      contact: "",
      message: ""
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <p className="note">All fields are required.</p>

      <label>
        Student Name
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email ID
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Number
        <input
          type="tel"
          name="contact"
          placeholder="Enter your contact number"
          value={formData.contact}
          onChange={handleChange}
        />
      </label>

      <label>
        Feedback Message
        <textarea
          name="message"
          placeholder="Write your feedback here"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </label>

      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;