import { useParams } from "react-router-dom";

export const StoreDetailsPage = () => {
  const { restaurantname } = useParams();
  const urlToOrginalRestaurantName = restaurantname?.replace(/\-+/g, " ");
  return (
    <>
      <h1>{urlToOrginalRestaurantName}</h1>
    </>
  );
};
