import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormProvider";
import { useForm } from "react-hook-form";

type TFormValues = {
  restaurantName: string;
  city: string;
  country: string;
  telephone: number;
  openingHours: number;
};

export const RestrauntDetails = () => {
  const { updateFormData, setSteps, steps, formData } = useFormContext();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleSubmit = (data: TFormValues) => {
    updateFormData(data);

    setSteps(steps + 1);
  };
  return (
    <>
      <p>add details about your restraunt</p>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div>
          <label htmlFor="">Restraunt Name</label>
          <input type="text" className="" {...register("restaurantName")} />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input
            type="text"
            className=""
            placeholder="city"
            {...register("city")}
          />
        </div>
        <div>
          <label htmlFor="">Country</label>
          <input
            type="text"
            className=""
            placeholder="Country"
            {...register("country")}
          />
        </div>
        <div>
          <label htmlFor="">Telphone</label>
          <input
            type="text"
            className=""
            placeholder="telephone"
            {...register("telephone")}
          />
        </div>
        <div>
          <label htmlFor="">openingHours</label>
          <input
            type="text"
            className=""
            {...register("openingHours")}
            placeholder="openingHours"
          />
        </div>

        <Button>Next</Button>
      </form>
    </>
  );
};
