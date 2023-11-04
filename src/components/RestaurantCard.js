import { URLS } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData?.info;
  return (
    <Link to={"/restaurants/" + resData?.info?.id}>
      <div data-testid="resCard" className="rounded-lg m-4 p-4 w-[250px] h-43 bg-violet-200 shadow-md hover:bg-violet-400 hover:border-dashed border-2 hover:border-black">
        <img
          className="rounded-md w-25"
          alt="res-logo"
          src={URLS.CDN_URL + resData.info.cloudinaryImageId}
        />
        <h3 className="text-rose-700 py-4 font-extrabold text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4 className="text-rose-500">
          <b>{sla.deliveryTime} minutes</b>
        </h4>
      </div>
    </Link>
  );
};

export const cardwithLabel = (RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-50 border-4 border-black m-4 p-2 rounded-md">
          🟢
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
