import { useState } from "react";
import { URLS } from "../utils/constants";

const Header = () => {
  const handleClick = () => {
    setButtonLabel(
      (prevLabel) =>
        (prevLabel.buttonLabel = buttonLabel === "Login" ? "Logout" : "Login")
    );
  };
  const [buttonLabel, setButtonLabel] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={URLS.LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login" onClick={handleClick}>
              {buttonLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
