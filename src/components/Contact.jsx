import React, { useState } from "react";

const Contact = ({ currentStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const changeStep = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://api-gamma-neon.vercel.app/gowt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${name}: ${subject}`,
          message: `From: ${email}\n\n${message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSuccess(
        "Message sent successfully! We have received your email and will get back to you shortly."
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="form" id="form">
      <div className="form-container">
        <form onSubmit={changeStep}>
          <h1 className="suc-head">Send us a message</h1>
          <br />
          {success && (
            <div className="success">
              <p className="success">{success}</p>
            </div>
          )}
          <br />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="card-field"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="card-field"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="card-field"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="card-field contact-field"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="look" type="submit">
            Send Message
          </button>
        </form>
        <br />
        <br />
        {/* Display success or error messages */}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
