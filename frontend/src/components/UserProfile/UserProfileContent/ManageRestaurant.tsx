import { useFormContext } from "@/context/FormProvider";
import { Cuisines } from "@/forms/manage-restraunt/Cuisines";
import { RestrauntDetails } from "@/forms/manage-restraunt/RestrauntDetails";

export const ManageRestaurant = () => {
  const { steps } = useFormContext();
  return (
    <>
      {steps === 1 && <RestrauntDetails />}
      {steps === 2 && <Cuisines />}
      {steps === 3 && <p>submit</p>}
    </>
  );
};
