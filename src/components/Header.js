import { useState } from "react";
import { URLS } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const handleClick = () => {
    setButtonLabel(
      (prevLabel) =>
        (prevLabel.buttonLabel = buttonLabel === "Login" ? "Logout" : "Login")
    );
    setClassName(
      (prevLabel) =>
        (prevLabel.className = buttonLabel === "Login" ? "login" : "logout")
    );
  };
  const [buttonLabel, setButtonLabel] = useState("Logout");
  const [className, setClassName] = useState("logout");
  return (
    <div className="flex  justify-between dark:bg-pink-100 shadow-md m-4 sm:bg-pink-300 lg:bg-pink-600">
      <div className="flex">
        <img className="w-40" src={URLS.LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-2">
          <li className="px-4">Online Status{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Shopy your groceries!!</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button className={className} onClick={handleClick}>
              {buttonLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
