import RestaurantCard from "./RestaurantCard";

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resname="Boston Pizza" cuisine="Pizza Fries Beer"/>
                <RestaurantCard resname="BarBurrito" cuisine="Burritos"/>
            </div>

        </div>
    );
};

export default Body;