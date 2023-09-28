import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);
  let json;

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.88563&lng=77.6805328&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    json = await data.json();
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setisLoading((prevState) => (prevState.isLoading = false));
  };

  const [resList, setResData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const filterOnRatings = () => {
    setFilteredRes(resList.filter((data) => data.info.avgRating >= 4.3));
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

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="searchContainer">
          <input
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          ></input>
          <button onClick={() => filterOnSearch()}>Search</button>
          <button onClick={filterOnRatings}>Top Rated Restro</button>
          <button onClick={removefilter}>Remove filter</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
