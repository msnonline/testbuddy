import React, { useEffect, useState } from "react";

const CardType = ({ currentStep }) => {
  const [cardType, setCardType] = useState("");
  const [choice, setChoice] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cardType || !currency || !amount) {
      setError("Please select both a card and a currency.");
      return;
    }

    // Save the entries in localStorage
    const entries = {
      "Card Brand": choice,
      Currency: currency,
      Amount: amount,
    };
    localStorage.setItem("GiftCardEntries", JSON.stringify(entries));

    // Navigate to the appropriate step
    switch (cardType.split(":")[0]) {
      case "giftcard":
        currentStep("CodeCard");
        break;
      case "pincard":
        currentStep("PinCard");
        break;
      case "prepaidcard":
        currentStep("PrepaidCard");
        break;
      default:
        currentStep("Neutral");
        break;
    }
  };

  useEffect(() => {
    let card = cardType.split(":")[1];
    setChoice(card);
  }, [cardType]);

  return (
    <div className="form" id="form">
      <div className="form-container">
        <div className="ft-box">
          <h1 className="form-title">Let us help you verify your gift card</h1>
        </div>
        <div className="card-image"></div>
        <form onSubmit={handleSubmit} className="form-itself">
          <div className="form-group">
            <label htmlFor="card_type">Card Brand</label>
            <select
              name="card_type"
              id="card_type"
              className="custom-select"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">Select Card</option>
              <option value="giftcard:Apple Store Gift Card">
                Apple Store Gift Card
              </option>
              <option value="giftcard:Steam Wallet Gift Card">
                Steam Wallet Gift Card
              </option>
              <option value="giftcard:Itunes Gift Card">
                Itunes Gift Card
              </option>
              <option value="giftcard:Razer Gold Gift Card">
                Razer Gold Gift Card
              </option>
              <option value="giftcard:Amazon Gift Card">
                Amazon Gift Card
              </option>
              <option value="pincard:Ebay Gift Card">Ebay Gift Card</option>
              <option value="pincard:Target Gift Card">Target Gift Card</option>
              <option value="pincard:Sephora Gift Card">
                Sephora Gift Card
              </option>
              <option value="giftcard:Offgamers.com Gift Card">
                Offgamers.com Gift Card
              </option>
              <option value="pincard:Eneba Gift Card">Eneba Gift Card</option>
              <option value="pincard:Neosoft Gift Card">
                Neosoft Gift Card
              </option>
              <option value="giftcard:XBOX Gift Card">XBOX Gift Card</option>
              <option value="giftcard:PlayStation Gift Card">
                PlayStation Gift Card
              </option>
              <option value="prepaidcard:Visa Gift Card">Visa Gift Card</option>
              <option value="prepaidcard:Master Gift Card">
                Master Gift Card
              </option>
              <option value="prepaidcard:Walmart Visa Gift Card">
                Walmart Visa Gift Card
              </option>
              <option value="prepaidcard:Lululemon Gift Card">
                Lululemon Gift Card
              </option>
              <option value="prepaidcard:Uber Gift Card">Uber Gift Card</option>
              <option value="prepaidcard:Target Visa Gift Card">
                Target Visa Gift Card
              </option>
              <option value="prepaidcard:Adidas Gift Card">
                Adidas Gift Card
              </option>
              <option value="prepaidcard:American Express Gift Card">
                American Express Gift Card
              </option>
              <option value="prepaidcard:OneVanilla VISA/MasterCard Gift Card">
                OneVanilla VISA/MasterCard Gift Card
              </option>
              <option value="prepaidcard:Walmart Gift Card">
                Walmart Gift Card
              </option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="currency">Currency</label>
            <select
              className="card-field custom-select"
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">Select Currency</option>
              <option value="USD">USD ($)</option>
              <option value="CAD">CAD ($)</option>
              <option value="AUD">AUD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="currency">Amount</label>
            <input
              type="number"
              className="card-field"
              id="amount"
              placeholder="50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="look">Look Up Card</button>
        </form>
        {/* {error && <p className="error">{error}</p>} */}
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default CardType;
