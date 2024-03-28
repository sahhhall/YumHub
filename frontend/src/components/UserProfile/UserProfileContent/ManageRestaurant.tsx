import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiStepForm } from "@/forms/manage-restraunt/MultiStepForm";

export const ManageRestaurant = () => {
 return (
 <div >
 <Tabs defaultValue="restaurant" className="   ">
  <TabsList className="w-full  bg-slate-800  ">
    <TabsTrigger className="  font-bold text-white tracking-wide " value="restaurant">My Restaurant</TabsTrigger>
    <TabsTrigger className=" font-bold text-white tracking-wide "  value="c-restaurant">Create Restaurant</TabsTrigger>
    
  </TabsList>
  <TabsContent value="restaurant">Make changes to your account here.</TabsContent>
  <TabsContent  value="c-restaurant"> <div className="mt-5"><MultiStepForm /></div></TabsContent>
</Tabs>
 </div>
 

 
 )
};
