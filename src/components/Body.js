import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body = () =>{

    const [ listOfRestaurants, setlistOfRestaurants ] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
       const restaurantsFromAPI =
    json?.data?.cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        console.log(restaurantsFromAPI);        
        setlistOfRestaurants(restaurantsFromAPI);

    }

    
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                    setlistOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} resdata={restaurant.info}/>
                })}
            </div>

        </div>
    );
};

export default Body;