import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import { useGetRestaurantwithoutLocation } from "@/api/GetRestaurantApi";
import { TRestaurant } from "@/types/Restaurant";

export const RestaurantListContainer = () => {
  const [restaurantsData, setRestaurantsData] = useState<TRestaurant[]>([]);
  const { restaurantsDetails } = useGetRestaurantwithoutLocation();
  useEffect(() => {
    if (restaurantsDetails) {
      console.log("here", restaurantsDetails);
      setRestaurantsData(restaurantsDetails.restaraunts);
    }
  }, [restaurantsDetails]);
  return (
    <div className="md:container">
      <div>
        <h1 className="md:text-xl text-xs font-extrabold tracking-wide">
          All Restaurants
        </h1>
      </div>
      <div className="mt-7">
        <Cards restaurantsData={restaurantsData} />
      </div>
    </div>
  );
};
