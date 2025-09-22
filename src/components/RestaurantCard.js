import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } = resdata;

  // Build image URL using the exported constant
  const imageUrl = cloudinaryImageId
    ? IMG_URL + cloudinaryImageId
    : "https://via.placeholder.com/660x400?text=No+Image"; // fallback

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[238px] bg-gray-100 hover:bg-gray-200">
      <img src={imageUrl} alt={name} className="rounded-sm" />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
