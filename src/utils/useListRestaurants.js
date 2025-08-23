import React, {useEffect, useState} from 'react'

const useListRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
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
        setRestaurants(restaurantsFromAPI);     
    }
  return restaurants;
}

export default useListRestaurants;