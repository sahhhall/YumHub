import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { cuisinesList } from "./config/restraunt--options";
import { useFormContext } from "@/context/FormProvider";

type TFormItems = {
  servesCuisine: [string];
};

export const Cuisines = () => {
  const { setSteps, steps, formData, updateFormData } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormItems>({
    defaultValues: formData,
  });

  const handleOnSubmit = (data: any) => {
    alert(JSON.stringify(data));
    setSteps(steps + 1);
  };

  const handleBack = () => {
    setSteps(steps - 1);
  };
  return (
    <div className="pt-5">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid md:grid-cols-5 gap-1   ">
          {cuisinesList.map((cuisines, index) => (
            <div key={index}>
              <label className="pe-1">{cuisines}</label>
              <input
                type="checkbox"
                value={cuisines}
                {...register("servesCuisine", {
                  required: true,
                })}
              />
            </div>
          ))}
          {errors.servesCuisine && errors.servesCuisine.type === "required" && (
            <div>
              <p>dsfds</p>
            </div>
          )}
        </div>
        <button onClick={handleBack}>Back</button>
        <Button>Next</Button>
      </form>
    </div>
  );
};
