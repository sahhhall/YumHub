import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormProvider";
import { useForm } from "react-hook-form";
import './style.css'
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
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex">
        <div className="flex-col">
          <label className="px-2 tracking-widest font-semibold flex">Name</label>
          <input type="text" className="form-input-restraunt p-2" {...register("restaurantName")} />
        </div>
        <div className="flex-col ">
          <label className="px-2 tracking-widest font-semibold flex">City:</label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            placeholder="city"
            {...register("city")}
          />
        </div>
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">Country</label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            placeholder="Country"
            {...register("country")}
          />
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">Telphone</label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            placeholder="telephone"
            {...register("telephone")}
          />
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">openingHours</label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            {...register("openingHours")}
            placeholder="openingHours"
          />
        </div>

        <Button>Next</Button>
      </form>
    </>
  );
};
