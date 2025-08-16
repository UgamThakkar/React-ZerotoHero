import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=602137&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data); 
  };

  if (!resInfo) return <Shimmer />;

    const { name, costForTwoMessage, totalRatingsString, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

    const { menuItems } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info || {};
    console.log(menuItems);

  return (
    <div>
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <p>{cuisines.join(",")}</p>
      <p>{totalRatingsString}</p>
    </div>
  );
};

export default RestaurantMenu;
