import { Steps } from "@/components/UserProfile/UserProfileContent/steps-form/Steps";
import { useFormContext } from "@/context/FormProvider";
import { Cuisines } from "@/forms/manage-restraunt/Cuisines";
import { RestrauntDetails } from "@/forms/manage-restraunt/RestrauntDetails";

export const ManageRestaurant = () => {
  const { steps } = useFormContext();
  return (<div className="w-full">
  <div className="w-full">
  <Steps />
  </div>
  {steps === 1 &&  <hr className="mt-3 w-[15%] " />}
  {steps === 2 && <hr className="mt-3 w-[50%]" /> }
  {steps === 3 &&  <hr className="mt-3 " />}
 
   <div className="flex justify-center mt-5">
     
     {steps === 1 && (
       <div className="flex flex-col ">
         <RestrauntDetails />
       </div>
     )}

     {steps === 2 &&<div className="flex flex-col ">
         <Cuisines />
       </div> }
     {steps === 3 && <p>submit</p>}
   </div>
  </div>
   
  );
};
