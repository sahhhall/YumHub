import { useEffect, useState } from "react";
import {
  useGetNearbyRestaurants,
  useGetRestaurantLocation,
  useGetRestaurantwithoutLocation,
} from "@/api/GetRestaurantApi";
import { handleLocationClick } from "@/utils/getLocation";
import { RestaurantCardSlider } from "./RestaurantCardSlider";
import { TRestaurant } from "@/types/Restaurant";
import { MapPin } from "lucide-react";

export const NearbyRestaurantListings = () => {
  const [restaurantsData, setRestaurantsData] = useState<TRestaurant[]>([]);
  const [locationn, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    getLocationAndFetchRestaurants();
  }, []);

  const getLocationAndFetchRestaurants = async () => {
    try {
      // Get the geolocation
      const location = await handleLocationClick();
      setLocation(location);
      location
        ? getNearestRestaraunts(location) //here get all res api    ;
        : getNearestRestaraunts(location);
    } catch (error) {
      console.error("Error fetching nearby restaurants:", error);
    }
  };

  const { getNearestRestaraunts, restaurants } = useGetNearbyRestaurants();
  const { restaurantsDetails } = useGetRestaurantwithoutLocation();
  const { location } = useGetRestaurantLocation(
    locationn.latitude,
    locationn.longitude
  );
  useEffect(() => {
    if (restaurants) {
      const data = JSON.parse(restaurants);
      setRestaurantsData(data.restaurants);
    }else if ( restaurantsDetails) {
      console.log("here",restaurantsDetails)
      setRestaurantsData(restaurantsDetails.restaraunts)
    }
  }, [restaurants,restaurantsDetails]);

  return (
    <div className="md:container">
      <div>
        <h1 className="md:text-xl text-xs font-extrabold tracking-wide">
          All Restaurants Nearby
        </h1>{" "}
        <div className="flex mt-1  ">
          <MapPin size="16" />
          <p className=" align-middle tracking-widest ms-1 text-slate-500 text-xs  font-thin ">
            {location}
          </p>
        </div>
      </div>

      <RestaurantCardSlider restaurantsData={restaurantsData} />
      <hr className="mt-20" />
    </div>
  );
};
