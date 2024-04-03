import { useGetRestaurantLocation } from "@/api/GetRestaurantApi";
import { calculateEstimatedDelivery } from "@/utils/getEstimatedDelveryTime";
import './style.css'
export const RestaurantCard = ({ restaurant }: any) => {
  const latitude = restaurant.location.coordinates[1];
  const longitude = restaurant.location.coordinates[0];
  const { location } = useGetRestaurantLocation(latitude, longitude);

  return (
    <div>
      <img src={restaurant.imageUrl} alt="n"  />
      <div className="flex flex-col ">
        <h1 className="font-bold justify-center flex">{restaurant.restaurantName}</h1>
        <div className="flex justify-center">
          <p className="  md:tracking-widest text-sm font-semibold text-slate-700">
            {(restaurant.distance / 1000).toFixed(1)} km,
          </p>
          <p className=" md:tracking-widest text-sm font-semibold text-slate-700">
            {calculateEstimatedDelivery(
              restaurant.distance,
              restaurant.openingHours
            )}{" "}
            mins
          </p>
        </div>
<div className="flex justify-center">
<p className="  md:tracking-widest text-sm-location text-xs font-semibold text-slate-700">{location}</p>
</div>
       
      </div>
    </div>
  );
};

export default RestaurantCard;
