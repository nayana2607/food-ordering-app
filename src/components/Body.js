import { useContext, useEffect, useState } from "react";

import RestaurantCard, { cardwithLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { loggedInUser,setUserName } = useContext(UserContext);
  const [resList, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardwithLabel = cardwithLabel(RestaurantCard);



  useEffect(() => {
    fetchData();
  }, []);
  let json;

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3149808&lng=73.2182945&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    json = await data.json();

    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>Looks life you are offline</h1>;
  }

  const filterOnRatings = () => {
    setFilteredRes(resList.filter((data) => data.info.avgRating >= 4.3));
  };

  const filterOnVeg = () => {
    setFilteredRes(resList.filter((data) => data.info.veg));
  };

  const removefilter = () => {
    setFilteredRes(resList);
  };

  const filterOnSearch = () => {
    setFilteredRes(
      resList.filter((data) =>
        data.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  if (resList?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      {loggedInUser && <p className="px-4 font-medium"> {loggedInUser}, Hey there!!🙋‍♂️ Look what we have for you today</p>}
      <div className="filter">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            data-testid="searchInput"
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          ></input>
          <button
            className="px-4 py-0.5 rounded-md bg-pink-200 hover:bg-pink-400 m-4"
            onClick={() => filterOnSearch()}
          >
            Search
          </button>
          <button
            className="px-4 py-0.5 rounded-md bg-pink-400 m-4 hover:bg-pink-800"
            onClick={filterOnRatings}
          >
            Top Rated Restro
          </button>
          <button
            className="px-4 py-0.5 rounded-md bg-pink-400 m-4 hover:bg-pink-800"
            onClick={filterOnVeg}
          >
            Veg only
          </button>
          <button
            className="px-4 py-0.5 rounded-md bg-pink-400 m-4 hover:bg-pink-800"
            onClick={removefilter}
          >
            Remove filter
          </button>
          <label>UserName </label>
          <input className="border border-black px-2" value={loggedInUser} onChange={e=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes?.map((data) =>
          data.info.veg ? (
            <RestaurantCardwithLabel key={data.info.id} resData={data} />
          ) : (
            <RestaurantCard key={data.info.id} resData={data} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
