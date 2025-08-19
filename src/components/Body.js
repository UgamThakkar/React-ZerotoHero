import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () =>{

    const [ listOfRestaurants, setlistOfRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);

    const [ searchValue, setSearchValue ] = useState("");

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
        setFilteredRestaurants(restaurantsFromAPI);

    }

    
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                        
                        <button onClick={()=>{
                            console.log(searchValue);

                            const filteredSetofRestaurants = listOfRestaurants.filter((res)=>
                                res?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
                            );
                            setFilteredRestaurants(filteredSetofRestaurants);
                        }}>
                        Search</button>
                </div>
                
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant, index)=>{
                    return <Link key={`${restaurant.info.id}-${index}`} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resdata={restaurant.info}/></Link>
                })}
            </div>

        </div>
    );
};

export default Body;