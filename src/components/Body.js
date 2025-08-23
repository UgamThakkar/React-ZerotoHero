import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListRestaurants from "../utils/useListRestaurants";
const Body = () =>{
    const restaurantsFromAPI = useListRestaurants();

    const [ listOfRestaurants, setlistOfRestaurants ] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants ] = useState([]);

    const [ searchValue, setSearchValue ] = useState("");

    useEffect(()=>{
        if(restaurantsFromAPI.length > 0){
            setlistOfRestaurants(restaurantsFromAPI);
            setFilteredRestaurants(restaurantsFromAPI);
        }
    }, [restaurantsFromAPI]);


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>You're Offline! Please check your connection!</h1> 
    
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