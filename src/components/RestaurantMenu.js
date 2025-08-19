import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [showVegOnly,setShowVegOnly] = useState(false);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, totalRatingsString, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const menuItems =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.map((c) => c?.card?.card?.itemCards)
      .filter(Boolean)
      .flat()
      .map((item) => item.card.info) || [];

    const filteredMenu = showVegOnly ? menuItems.filter((item)=> item.itemAttribute?.vegClassifier?.toUpperCase() === "VEG") : menuItems
    

  return (
    <div>
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <p>{cuisines?.join(", ")}</p>
      <p>{totalRatingsString}</p>

      <button onClick={()=> setShowVegOnly(!showVegOnly)}>{showVegOnly ? "Show All" : "Veg Only"}</button>

      <h2>Menu</h2>
      <ul>
        {filteredMenu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{(item.price || item.defaultPrice) / 100}
            <span style={{ color: item.itemAttribute?.vegClassifier === "VEG" ? "green" : "red" }}>
              ({item.itemAttribute?.vegClassifier})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
