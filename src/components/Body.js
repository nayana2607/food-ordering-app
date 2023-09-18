import { useState } from "react";
import { restaurData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";




const Body = () => {
  const [resList, setResData] = useState(restaurData);
  const filterOnRatings = () => {
    setResData((prevData) =>
      prevData.filter((data) => data.info.avgRating >= 4.3)
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button onClick={filterOnRatings} className="filter-btn">
          Top Rated Restro
        </button>
      </div>
      <div className="res-container">
        {resList.map((data) => (
          <RestaurantCard key={data.info.id} resData={data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
