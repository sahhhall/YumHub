import { useFormContext } from "@/context/FormProvider";
import { useFieldArray, useForm } from "react-hook-form";
import { ButtonNextBack } from "./next-back-button/ButtonNextBack";
import { Button } from "@/components/ui/button";
import "./style.css";
import { useCreateMyrestraunt } from "@/api/MyRestrauntApi";
type TFormValues = {
  menu: {
    name: string;
    price: string;
  }[];
  imageUrl: FileList | null;
};

export const MenuSection = () => {
  const { steps, setSteps, formData, updateFormData } = useFormContext();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const { fields, append, remove } = useFieldArray({
    name: "menu",
    control,
  });
  const { isPending, createRestaurant } = useCreateMyrestraunt();

  const onSubmit = async (data: TFormValues) => {
    updateFormData(JSON.parse(JSON.stringify(data)));
    createRestaurant(formData);
  };

  const handleBack = () => {
    setSteps(steps - 1);
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid md:grid-row-2 ">
          {fields.map((field, index) => (
            <div className="flex gap-2" key={field.id}>
              <input
                className={`form-input-restraunt p-2 ${
                  errors.menu?.[index]?.name ? "error-menu" : ""
                }`}
                type="text"
                {...register(`menu.${index}.name` as const, {
                  required: true,
                })}
                placeholder="Name"
              />
              <input
                className={`form-input-restraunt p-2 ${
                  errors.menu?.[index]?.price ? "error-menu" : ""
                }`}
                type="text"
                {...register(`menu.${index}.price` as const, {
                  required: true,
                })}
                placeholder="Price"
              />
              {index >= 0 && (
                <Button
                  onClick={() => remove(index)}
                  className=" bg-red-500 hover:bg-red-500"
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-3">
          <Button onClick={() => append({ name: "", price: "" })}>
            Add menu
          </Button>
        </div>
        <div>
          <label>File</label>
          <input
            type="file"
            {...register("imageUrl", {
              required: true,
            })}
          />
        </div>
        <ButtonNextBack
          isPending={isPending}
          step={steps}
          handleBack={handleBack}
        />
      </form>
    </div>
  );
};
