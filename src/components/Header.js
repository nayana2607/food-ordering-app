import { useContext, useState } from "react";
import { URLS } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  //Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = () => {
    setUserName(buttonLabel === "Logout" ? "" : loggedInUser);
    setButtonLabel(
      (prevLabel) =>
        (prevLabel.buttonLabel = buttonLabel === "Login" ? "Logout" : "Login")
    );
    setClassName(
      (prevLabel) =>
        (prevLabel.className =
          buttonLabel === "Login"
            ? "bg-violet-200  px-2  rounded-xl"
            : "bg-yellow-300  px-2 rounded-xl")
    );
  };
  const [buttonLabel, setButtonLabel] = useState("Login");
  const [className, setClassName] = useState("bg-yellow-300 px-2 rounded-xl");
  return (
    <div className="flex  justify-between dark:bg-pink-100 shadow-md m-4 sm:bg-pink-300 lg:bg-pink-600">
      <div className="flex">
        <img className="w-40" src={URLS.LOGO_URL} />
      </div>
      <div className="flex items-center justify-between">
        {loggedInUser && (
          <div>
            {" "}
            <p className="font-bold">Welcome {loggedInUser}</p>
          </div>
        )}
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
          <li className="px-4 font-bold">
            <Link to="/cart">🛒 Cart ({cartItems.length} items)</Link>
          </li>
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
