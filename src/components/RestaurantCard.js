import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } = resdata;

  // Build image URL using the exported constant
  const imageUrl = cloudinaryImageId
    ? IMG_URL + cloudinaryImageId
    : "https://via.placeholder.com/660x400?text=No+Image"; // fallback

  return (
    <div className="res-card">
      <img src={imageUrl} alt={name} className="res-logo" />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
