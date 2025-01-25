import Menu from "../assets/menu.png";

const Header = ({ currentStep, handleStepChange }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="text-logo" onClick={()=>{window.location.href="/"}}>GiftCardCheck</h1>
        {/* <sub className="logo-sub">Your balance buddy</sub> */}
      </div>
      <div className="menu">
        <button
          className="menu-btn"
          onClick={() => {
            handleStepChange("Contact");
            setTimeout(() => {
              window.location.href = "#form";
            }, 2);
          }}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
