import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const [showVegOnly,setShowVegOnly] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  console.log("->>>>>>>>>>>>>", resInfo);

  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, totalRatingsString, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.map((c) => c?.card?.card?.itemCards)
      .filter(Boolean)
      .flat()
      .map((item) => item.card.info) || [];

    const filteredMenu = showVegOnly ? menuItems.filter((item)=> item.itemAttribute?.vegClassifier?.toUpperCase() === "VEG") : menuItems
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      .filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("categories", categories);

    const nestedCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
  
  
    return (
    <div className="text-center">
      <h1 className="font-bold my-8 text-2xl">{name}</h1>
      <p className="font-bold">{cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      
      {/* <button className="px-4 py-0.5 m-4 bg-green-100 rounded-lg cursor-pointer" onClick={()=> setShowVegOnly(!showVegOnly)}>{showVegOnly ? "Show All" : "Veg Only"}</button> */}

      {/* <ul>
        {filteredMenu.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{(item.price || item.defaultPrice) / 100}
            <span style={{ color: item.itemAttribute?.vegClassifier === "VEG" ? "green" : "red" }}>
              ({item.itemAttribute?.vegClassifier})
            </span>
          </li>
        ))}
      </ul> */}

      {/* Categories Accordion */}

      {categories.map((category, index) => {
        const cat = category?.card?.card;
        if (!cat?.itemCards) return null;
        return <RestaurantCategory key={cat.categoryId} data={cat} showItems={index === showIndex ? true : false} setShowIndex = {()=>setShowIndex(index)}/>;
      })}

    </div>
  );
};

export default RestaurantMenu;
