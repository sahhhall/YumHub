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
  imageUrl: any;
  restaurantName?: string;
  city?: string;
  country?: string;
  telephone?: string;
  openingHours?: string;
  servesCuisine?: string[];
  latitude?: number ; 
  longitude?: number ;
};

export const MenuSection = () => {
  const { steps, setSteps, formData } = useFormContext();
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
    const {
      restaurantName,
      country,
      city,
      telephone,
      openingHours,
      servesCuisine,
      menu,
      imageUrl,
      latitude,
      longitude
    } = data;
    let formData = new FormData();
    formData.append("restaurantName", restaurantName || "");
    formData.append("country", country || "");
    formData.append("city", city || "");
    formData.append("telephone", telephone || "");
    formData.append("openingHours", openingHours || "");
    formData.append("servesCuisine", JSON.stringify(servesCuisine || []));
    formData.append("latitude", latitude as any);
    formData.append("longitude", longitude as any )
    menu.forEach((item, index) => {
      const menuItem = {
          name: item.name || "",
          price: item.price || ""
      };
      formData.append(`menu[${index}]`, JSON.stringify(menuItem));
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
          />
        </div>
        {errors.imageUrl && errors.imageUrl.type === "required" && (
          <p className=" text-red-500 flex ">please select atleast one image</p>
        )}

        <ButtonNextBack
          isPending={isPending}
          step={steps}
          handleBack={handleBack}
        />
      </form>
    </div>
  );
};
