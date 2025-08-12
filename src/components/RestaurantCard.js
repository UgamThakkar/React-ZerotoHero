import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL}/>
            <h3>{props.resname}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 Stars</h4>
            <h4>33 minutes</h4>
        </div>
    );
};

export default RestaurantCard;