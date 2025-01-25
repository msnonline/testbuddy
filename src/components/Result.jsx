import { useState, useEffect } from "react";

const Result = () => {
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
    <div className="form ree" id="result">
      <div className="form-container no-result">
        <div className="result-container">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            {" "}
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />{" "}
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h1 className="status">Activated</h1>
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
                    <strong className="valid">Result</strong>
                  </td>
                  <td className="tr">
                    <strong className="valid">
                      The card is active with a balance of{" "}
                      {retreiveLocal?.["Currency"]} {retreiveLocal?.["Amount"]}{" "}
                      and ready for use.
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button
              className="continue"
              onClick={() => {
                currentStep("CardType");
              }}
            >
              Verify Another Card
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
