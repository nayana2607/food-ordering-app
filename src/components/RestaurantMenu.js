import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { URLS } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [isLoading, setisLoading] = useState(true);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;
  //custom hooks

  const resData = resInfo?.data?.cards[0]?.card?.card?.info;
  const menuData =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
      ?.card?.carousel;
  // setisLoading(false)

  const { name, avgRating, cuisines } = resData;
  return (
    <div>
      <h2>{name}</h2>⭐{avgRating}
      <div className="p-5">
        <b>cuisines:</b>
        <p> {cuisines.join(",")}</p>
      </div>
      <h3 className="p-5">Menu</h3>
     
        <ul className="p-5">
          <div className="flex ">
            {menuData?.map((menu) => (
              <li className="font-bold" key={menu.dish.info.imageId}>
                <div className="flex flex-wrap">
                  <img
                    className="rounded-md w-52  border-4 border-black-800 hover:outline-dashed"
                    src={URLS.CDN_URL + menu.dish.info.imageId}
                  />
                  <div className="py-4 w-52 text-left">
                    {menu.dish.info.name}-{" "}
                    {(menu.dish.info.defaultPrice ?? menu.dish.info.price) /
                      100}
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
 
    </div>
  );
};

export default RestaurantMenu;
