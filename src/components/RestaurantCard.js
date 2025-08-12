import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { name, stars, cuisine, deliveryTime, priceForTwo } = props.resdata;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL}/>
            <h3>{name}</h3>
            <h4>{stars}</h4>
            <h4>{cuisine}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{priceForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;