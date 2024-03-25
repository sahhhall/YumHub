import { useFormContext } from "@/context/FormProvider";
import { useFieldArray, useForm } from "react-hook-form";
import { ButtonNextBack } from "./next-back-button/ButtonNextBack";
import { Button } from "@/components/ui/button";
import "./style.css";
import { useCreateMyrestraunt } from "@/api/MyRestrauntApi";
import { useState } from "react";
type TFormValues = {
  menu: {
    name: string;
    price: string;
  }[];
  imageUrl: any;
  restaurantName?: string;
  city?: string;
  country?: string;
  telephone?: string;
  openingHours?: string;
  servesCuisine?: string[];
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
  
const [file, setFile] = useState();

 
  const { fields, append, remove } = useFieldArray({
    name: "menu",
    control,
  });
  const { isPending, createRestaurant } = useCreateMyrestraunt();

  const onSubmit = async (data: TFormValues) => {
    const { restaurantName, country, city, telephone, openingHours, servesCuisine, menu, imageUrl } = data;
  
    let formData = new FormData();
    formData.append("restaurantName", restaurantName  || "" );
    formData.append("country", country || "");
    formData.append("city", city || "");
    formData.append("telephone", telephone || "");
    formData.append("openingHours", openingHours || "");
    formData.append("servesCuisine", JSON.stringify(servesCuisine || []));
  
    menu.forEach((item, index) => {
      formData.append(`menu[${index}].name`, item.name);
      formData.append(`menu[${index}].price`, item.price);
    });
  
    if (imageUrl) {
      formData.append("imageUrl", imageUrl[0]);
    }
  
    console.log(formData);

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
        <div className="flex justify-center mt-3">
  <input
    {...register("imageUrl" as const, {
      required: "Recipe picture is required",
    })}
    type="file"
    name="imageUrl"
    onChange={(event: any) => {
      setFile( event.target.files && event.target.files[0]);
      
    }}
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
