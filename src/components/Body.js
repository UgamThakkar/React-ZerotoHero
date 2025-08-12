import RestaurantCard from "./RestaurantCard";
import  restaurants from "../utils/mockdata";
import { useState } from "react";


const Body = () =>{

    const [ listOfRestaurants, setlistOfRestaurants ] = useState(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants = listOfRestaurants.filter((res)=>res.stars>4);
                    setlistOfRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.id} resdata={restaurant}/>
                })}
            </div>

        </div>
    );
};

export default Body;