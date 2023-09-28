import { useEffect, useState } from "react";
import { URLS } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    const data = await fetch(URLS.MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
