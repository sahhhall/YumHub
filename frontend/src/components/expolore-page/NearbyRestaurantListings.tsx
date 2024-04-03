import { useEffect, useState } from "react";
import { useGetNearbyRestaurants } from "@/api/GetRestaurantApi";
import { handleLocationClick } from "@/utils/getLocation";
import { RestaurantCardSlider } from "./RestaurantCardSlider";
import { TRestaurant } from "@/types/Restaurant";

export const NearbyRestaurantListings = () => {
  const [restaurantsData, setRestaurantsData] = useState<TRestaurant[]>([]);
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
    <div className="md:container">
      <h1 className="md:text-xl text-xs font-extrabold tracking-wide">
        All Restaurants Nearby
      </h1>
    <RestaurantCardSlider restaurantsData={restaurantsData} />
      <hr className="mt-20" />
    </div>
  );
};
