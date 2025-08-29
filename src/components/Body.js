import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
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

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        if(restaurantsFromAPI.length > 0){
            setlistOfRestaurants(restaurantsFromAPI);
            setFilteredRestaurants(restaurantsFromAPI);
            console.log(listOfRestaurants);
        }
    }, [restaurantsFromAPI]);


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>You're Offline! Please check your connection!</h1> 
    
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                
                <div className="search p-4 m-4">
                    <input className="border border-solid border-black" type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                        
                        <button className="px-4 py-0.5 m-4 bg-green-100 rounded-lg" 
                            onClick={()=>{
                            console.log(searchValue);

                            const filteredSetofRestaurants = listOfRestaurants.filter((res)=>
                                res?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
                            );
                            setFilteredRestaurants(filteredSetofRestaurants);
                        }}>
                        Search</button>
                </div>
                
                <div className="search p-4 m-4 flex items-center">
                        <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={()=>{
                            const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
                            setFilteredRestaurants(filteredList);
                        }}>Top Rated Restaurants</button>
                </div>
                
            </div>
            <div className="flex flex-wrap text-lg">
                {filteredRestaurants.map((restaurant, index)=>{
                    return <Link key={`${restaurant.info.id}-${index}`} to={"/restaurants/" + restaurant.info.id}>
                        {restaurant.info.promoted ? (<RestaurantCardPromoted resdata={restaurant.info}/>) : (<RestaurantCard resdata={restaurant.info} />)}
                        </Link>
                })}
            </div>

        </div>
    );
};

export default Body;