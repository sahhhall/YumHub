import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MultiStepForm } from "@/forms/manage-restraunt/MultiStepForm";
import { MyRestaurantDetails } from "./restaurant-details/MyRestaurantDetails";
import { useGetMyRestaraunt } from "@/api/MyRestrauntApi";

export const ManageRestaurant = () => {
  const { restaurant } = useGetMyRestaraunt();
  return (
    <div>
      <Tabs defaultValue="restaurant" className="   ">
        <TabsList className="w-full  bg-slate-800  ">
          <TabsTrigger
            className="  font-bold text-white tracking-wide "
            value="restaurant"
          >
            My Restaurant
          </TabsTrigger>
          <TabsTrigger
            className=" font-bold text-white tracking-wide "
            value="c-restaurant"
          >
            {restaurant ? <p>Update Restaurant</p> : <p>Create Restaurant</p>}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="restaurant">
          <div>
            {restaurant ? (
              <MyRestaurantDetails />
            ) : (
              <div>not registered a restaurant!!!!</div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="c-restaurant">
          <div className="mt-5">
            {restaurant ? (
              <div>here editing opiton todoo!!!!!!!</div>
            ) : (
              <MultiStepForm />
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
