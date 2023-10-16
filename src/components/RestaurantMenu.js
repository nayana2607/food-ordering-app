import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(0);

  //custom hooks
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resData = resInfo?.data?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (card) => card?.card?.card?.["@type"].includes("ItemCategory")
    );

  const { name, avgRating, cuisines } = resData;
  return (
    <div className="text-center">
      <div className="flex justify-center text-2xl">
        <h1 className="font-bold  my-4 mx-4">{name}</h1>
        <p className=" my-4 mx-4 ">⭐{avgRating}</p>
      </div>
      <div className="p-5">
        <p className="font-bold text-lg">Cuisines:</p>
        <p className="font-italic text-slate-900 text-md">
          {" "}
          {cuisines.join(",")}
        </p>
      </div>

      {categories.map((item, index) => (
        <RestaurantCategories
          key={item?.card?.card.title}
          details={item?.card?.card}
          show={index === showItems ? true : false}
          setShowItems={() =>
            setShowItems((prevShowItems) =>
              prevShowItems === index ? -1 : index
            )
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
