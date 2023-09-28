import { useState } from "react";
import { URLS } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const onlineStatus=useOnlineStatus()
  const handleClick = () => {
    setButtonLabel(
      (prevLabel) =>
        (prevLabel.buttonLabel = buttonLabel === "Login" ? "Logout" : "Login")
    );
    setClassName(  (prevLabel) =>
    (prevLabel.className =buttonLabel === "Login" ?'login':"logout"))
  };
  const [buttonLabel, setButtonLabel] = useState("Logout");
  const [className,setClassName]=useState("logout"

  )
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={URLS.LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status{onlineStatus?"🟢":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Shopy your groceries!!</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>Cart</li>
          <li>
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
