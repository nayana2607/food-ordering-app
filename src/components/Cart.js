import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearItems());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10 p-10">
      <h1 className="font-bold">Your cart</h1>
      <button
        className="p-2 m-2 bg-red-400 border border-black rounded-md shadow-lg  to-black"
        onClick={handleClick}
      >
        Clear Cart 🗑️
      </button>
      <div>
        {cartItems.length !== 0 ? (
          <ItemList items={cartItems} />
        ) : (
          "Your cart is empty!!"
        )}
      </div>
    </div>
  );
};

export default Cart;
