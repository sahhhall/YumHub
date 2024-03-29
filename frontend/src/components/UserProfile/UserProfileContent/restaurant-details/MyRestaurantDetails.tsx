import { useGetMyRestaraunt } from "@/api/MyRestrauntApi";
import { SpinnerLoading } from "@/components/SpinnerLoading";

export const MyRestaurantDetails = () => {
  const { isLoading, restaurant } = useGetMyRestaraunt();

  return (
    <>
      {isLoading ? (
        <SpinnerLoading />
      ) : (
        <div>
          <p>{restaurant?.city}</p>
          <img src={restaurant?.imageUrl} alt="" />
        </div>
      )}
    </>
  );
};
