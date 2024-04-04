import { TRestaurant } from "@/types/Restaurant";
import "./style.css";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TProps = {
  restaurantsData: TRestaurant[];
};
export const Cards = ({ restaurantsData }: TProps) => {
  const navigate = useNavigate();
  const handleOnClick = (restaurantName: string) => {
    const urlSlug = restaurantName.replace(/\s+/g, "-");
    navigate({
      pathname: `/restaurants/${urlSlug}`,
    });
  };
  return (
    <div className="flex flex-wrap overflow-hidden gap-5 md:grid grid-cols-3 hover:border-1  ">
      {restaurantsData.map((restaurant: TRestaurant, index: number) => (
        <div key={index} className="card-container ">
          <button
            className="w-full"
            onClick={() => {
              handleOnClick(restaurant.restaurantName);
            }}
          >
            <img
              src={restaurant.imageUrl}
              alt={restaurant.restaurantName}
              className="rounded-lg "
            />
          </button>

          <div className="ps-1 mt-2 flex justify-between ">
            <div>
              <p className="  text-sm tracking-wide font-semibold text-slate-600">
                {restaurant.restaurantName}
              </p>

              <p className="   text-xs font-normal tracking-widest">
                {restaurant.city}, {restaurant.country}
              </p>
            </div>

            <div className=" flex align-middle  w-11 h-5 bg-green-600 rounded-md mt-2">
              <p className=" text-xs flex ps-2 font-bold text-white  ">
                4.3 <Star size={12} className="mt-1 ps-1 " fill="white" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
