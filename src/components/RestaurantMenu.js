import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { URLS } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


  // const [isLoading, setisLoading] = useState(true);
  const { resId } = useParams();

 
  const resInfo=useRestaurantMenu(resId)
  if (resInfo===null) return <Shimmer />;
  //custom hooks

  const resData=resInfo?.data?.cards[0]?.card?.card?.info
  const menuData= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
  ?.card?.carousel
  // setisLoading(false)


  const { name, avgRating, cuisines } = resData;
  return (
    <div className="menu">
      <h2>{name}</h2>⭐{avgRating}
      <div>
        {" "}
        <b>cuisines:</b>
        <p> {cuisines.join(",")}</p>
      </div>
      <h3>Menu</h3>
      <ul>
        <div className="dish-container">
          {menuData?.map((menu) => (
            <li key={menu.dish.info.imageId}>
              {menu.dish.info.name}-
              {(menu.dish.info.defaultPrice ?? menu.dish.info.price) / 100}
              <div>
                <img
                  className="dish"
                  src={URLS.CDN_URL + menu.dish.info.imageId}
                />
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
