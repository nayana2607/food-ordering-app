import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ details, show, setShowItems }) => {
  handleClick = () => {
    setShowItems();
  };
  return (
    <div
      className="w-6/12 m-auto bg-gray-50 my-4 p-4 shadow-xl"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="text-l font-bold">
          {details.title} (
          {details?.itemCards?.length ? details?.itemCards?.length : ""})
        </span>
        <span>{show ? "⬆️" : "⬇️"}</span>
      </div>
      {show && <ItemList items={details} />}
    </div>
  );
};

export default RestaurantCategories;
