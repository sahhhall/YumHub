import { useFormContext } from "@/context/FormProvider";
import { useForm } from "react-hook-form";
import "./style.css";
import { ButtonNextBack } from "./next-back-button/ButtonNextBack";
import { ValidationErrors } from "./validation-errors/ValidationErrors";
type TFormValues = {
  restaurantName: string;
  city: string;
  country: string;
  telephone: number;
  openingHours: number;
};

export const RestrauntDetails = () => {
  const { updateFormData, setSteps, steps, formData } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleSubmit = (data: TFormValues) => {
    updateFormData(data);

    setSteps(steps + 1);
  };
  return (
    <div className="flex">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex md:flex-row flex-col ">
          <div className="flex-col ">
            <label className="px-2 tracking-widest font-semibold flex">
              Name
            </label>
            <input
              placeholder="restraunt name"
              type="text"
              className="form-input-restraunt p-2"
              {...register("restaurantName", {
                required: true,
              })}
            />
            {errors.restaurantName?.type === "required" && <ValidationErrors />}
          </div>

          <div className=""></div>
          <div className="flex-col ">
            <label className="px-2 tracking-widest font-semibold flex">
              City:
            </label>
            <input
              type="text"
              className="form-input-restraunt p-2"
              placeholder="city"
              {...register("city", { required: true })}
            />
            {errors.city?.type === "required" && <ValidationErrors />}
          </div>
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">
            Country
          </label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            placeholder="Country"
            {...register("country", {
              required: true,
            })}
          />
          {errors.country?.type === "required" && <ValidationErrors />}
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">
            Telphone
          </label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            placeholder="telephone"
            {...register("telephone", { required: true })}
          />{" "}
          {errors.telephone?.type === "required" && <ValidationErrors />}
        </div>
        <div>
          <label className="px-2 tracking-widest font-semibold flex">
          Delivery time (1Km/minute)
          </label>
          <input
            type="text"
            className="form-input-restraunt p-2"
            {...register("openingHours", { required: true })}
            placeholder="openingHours"
          />
          {errors.openingHours?.type === "required" && <ValidationErrors />}
        </div>

        <ButtonNextBack step={steps} />
      </form>
    </div>
  );
};
