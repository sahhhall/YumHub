import { useEffect, useState } from "react";
import { useGetNearbyRestaurants } from "@/api/GetRestaurantApi";
import { handleLocationClick } from "@/utils/getLocation";

export const NearbyRestaurantListings = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    getLocationAndFetchRestaurants();
  }, []);

  const getLocationAndFetchRestaurants = async () => {
    try {
      // Get the geolocation
      const location = await handleLocationClick();
      getNearestRestaraunts(location);
    } catch (error) {
      console.error("Error fetching nearby restaurants:", error);
    }
  };

  const { getNearestRestaraunts, restaurants } = useGetNearbyRestaurants();

  useEffect(() => {
    if (restaurants) {
      const data = JSON.parse(restaurants);
      setRestaurantsData(data.restaurants);
    }
  }, [restaurants]);

  return (
    <div className="container">
      <h1 className="md:text-xl text-xs font-extrabold tracking-wide">
        All Restaurants Nearby
      </h1>
      {restaurantsData.map((restaurant: any, index) => (
        <div key={index}>
          <h1>{restaurant.restaurantName}</h1>
          {/* Display other restaurant details as needed */}
        </div>
      ))}
      <hr className="mt-20" />
    </div>
  );
};
