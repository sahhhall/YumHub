import { useGetMyRestaraunt } from "@/api/MyRestrauntApi";
import { SpinnerLoading } from "@/components/SpinnerLoading";
import { RestaurantDetails } from "@/forms/user-restaurant-view-update/RestaurantDetails";

export const MyRestaurantDetails = () => {
  const { isLoading, restaurant } = useGetMyRestaraunt();

  return (
    <>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <div className="flex items-center justify-center flex-col">
          <RestaurantDetails restaurant={restaurant} />
        </div>
      )}
    </>
  );
};
