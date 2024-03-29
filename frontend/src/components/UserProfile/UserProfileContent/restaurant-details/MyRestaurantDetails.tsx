import { useGetMyRestaraunt } from "@/api/MyRestrauntApi";



export const MyRestaurantDetails = () => {
const { isLoading, restaurant } = useGetMyRestaraunt();
console.log(restaurant)
    return (
        <>
        <p>
          {restaurant?.city}
        </p>
        <img src={restaurant?.imageUrl} alt="" />
        </>
    )
}