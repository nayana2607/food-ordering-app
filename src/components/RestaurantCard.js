import { URLS } from "../utils/constants";
import { Link } from "react-router-dom";

const styleCard = {
    backgroundColor: "#ffe9e3",
  };
const RestaurantCard = (props) => {
    const {resData}=props;
    const {name,cuisines,avgRating,sla}=resData?.info
   return (
    <Link to={"/restaurants/"+resData.info.id}>
        <div className="res-card" style={styleCard}>
       <img
         className="res-img"
         alt="res-logo"
         src={URLS.CDN_URL+resData.info.cloudinaryImageId}
       />
       <h3>{name}</h3>
       <h4>{cuisines.join(', ')}</h4>
       <h4>{avgRating}</h4>
       <h4>{sla.deliveryTime} minutes</h4>
     </div></Link>
 
   );
 };

 export default RestaurantCard