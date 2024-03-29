import { Button } from "@/components/ui/button";
import { TRestrauntFormData } from "@/types/CreateRestraunt";
import { useState } from "react";

type TProps = {
  restaurant?: TRestrauntFormData;
};

export const RestaurantDetails = ({ restaurant }: TProps) => {
  console.log(restaurant);

  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <>
      <form >
        <div className="flex-col">
          <input
            type="text"
            disabled={isDisabled}
            className="tracking-widest flex font-bold"
            defaultValue={restaurant?.restaurantName}
          />

          <input
            type="text"
            className="flex"
            disabled={isDisabled}
            defaultValue={restaurant?.city}
          />
          <input
            type="text"
            disabled={isDisabled}
            defaultValue={restaurant?.country}
          />
          <div className="flex flex-row">
            {JSON.parse(restaurant?.servesCuisine as any).map(
              (cuisine: string, index: number) => (
                <li className="list-none flex ps-3 justify-center " key={index}>
                  {cuisine}
                </li>
              )
            )}
          </div>
          <input
            disabled={isDisabled}
            type="text"
            defaultValue={restaurant?.telephone}
          />

          <img src={restaurant?.imageUrl} alt={restaurant?.restaurantName} />
          <Button  onClick={() => setIsDisabled(!isDisabled)} >Edit</Button>
        </div>
      </form>
    </>
  );
};
