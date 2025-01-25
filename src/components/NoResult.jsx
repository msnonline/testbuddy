import { useState, useEffect } from "react";
import Cancel from "../assets/no.png";

const NoResult = ({ currentStep }) => {
  const [lastFour, setLastFour] = useState("");
  const [retreiveLocal, setRetreiveLocal] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("GiftCardEntries"));
    setRetreiveLocal(data);
  }, []);

  useEffect(() => {
    if (retreiveLocal) {
      if (retreiveLocal["Card Number"]) {
        setLastFour(retreiveLocal["Card Number"].slice(-4));
      } else if (retreiveLocal["Card Code"]) {
        setLastFour(retreiveLocal["Card Code"].slice(-4));
      }
    }
  }, [retreiveLocal]);

  return (
    <div className="form" id="result">
      <div className="form-container no-result">
        <div className="result-container nrt">
          <img src={Cancel} alt="" className="cancel" />
          <h1 className="status">Not Activated</h1>
          <div className="table-container">
            <table className="table">
              <tbody>
                <tr>
                  <td className="tl">Card Type</td>
                  <td className="tr">{retreiveLocal?.["Card Brand"]}</td>
                </tr>
                <tr>
                  <td className="tl">Card</td>
                  <td className="tr">{"****" + lastFour}</td>
                </tr>
                <tr>
                  <td className="tl">Currency</td>
                  <td className="tr">{retreiveLocal?.["Currency"]}</td>
                </tr>
                <tr>
                  <td className="tl">Amount</td>
                  <td className="tr">{retreiveLocal?.["Amount"]}</td>
                </tr>
                <tr>
                  <td className="tl">Refund Policy</td>
                  <td className="tr">Non-refundable once redeemed</td>
                </tr>
                <tr>
                  <td className="tl">
                    <strong className="invalid">Result</strong>
                  </td>
                  <td className="tr">
                    <strong className="invalid">
                      This card has not been activated, please follow the steps below.
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="next-steps">
              <h1 className="nextstep">Next steps</h1>
              <div className="ng">
                <h2>Double-Check Your Card Information</h2>
                <p>
                  Please review the card details you entered to ensure accuracy.
                  Verify the card information for any errors.
                  If the issue persists, you may need to contact the card issuer
                  or the store where the card was purchased for further
                  assistance.
                </p>
              </div>
              <div className="ng">
                <h2>Return to the Store</h2>
                <p>
                  The first step is to return to the store where you bought the
                  gift card. Bring the card and your receipt with you. Speak to
                  a manager if possible. They may be able to assist you directly
                  by checking the card if it has been used or not. If the card
                  has not been used they may replace it with a new one, but
                  often they will direct you to contact the card issuer.
                </p>
              </div>
              <div className="ng">
                <h2>Keep Documentation</h2>
                <p>
                  Make sure to keep any receipts or documentation related to the
                  purchase. This information can be crucial when dealing with
                  customer service.
                </p>
              </div>
              <div className="ng">
                <h2>Be Patient</h2>
                <p>
                  Sometimes, resolving the issue may take time. You might need
                  to wait for the card issuer to process your claim, which can
                  take several days or even weeks.
                </p>
              </div>
            </div>
          </div>
          <br />
          <button
            className="continue"
            onClick={() => {
              currentStep("CardType");
            }}
          >
            Start Again
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default NoResult;
