import { useGetRestaurantLocation } from "@/api/GetRestaurantApi";

export const RestaurantCard = ({ restaurant }: any) => {
  const latitude = restaurant.location.coordinates[1];
  const longitude = restaurant.location.coordinates[0];
  const { location } = useGetRestaurantLocation(latitude, longitude);

  const calculateEstimatedDelivery = () => {
    const km = (restaurant.distance / 1000).toFixed(1);
    return (Number(km) * restaurant.openingHours).toFixed(1);
  };

  return (
    <div>
      <img src={restaurant.imageUrl} alt="" />
      <h1>{restaurant.restaurantName}</h1>
      <div>
        <p>Estimated Delivery Time: {calculateEstimatedDelivery()} hours</p>
      </div>
      <p>Distance: {(restaurant.distance / 1000).toFixed(1)} km</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default RestaurantCard;
