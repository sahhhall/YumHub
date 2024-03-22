import { useForm } from "react-hook-form";
import { useFormContext } from "@/context/FormProvider";
import { cuisines } from "./config/restraunt--options";
import { AlertCircle } from "lucide-react";
import { ButtonNextBack } from "./next-back-button/ButtonNextBack";

type TFormItems = {
  servesCuisine: string[];
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
    updateFormData(JSON.parse(JSON.stringify(data)))
    setSteps(steps + 1);
  };

  const handleBack = () => {
    setSteps(steps - 1);
  };
  return (
    <div className="pt-5 flex">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="grid  sm:grid-cols-4 md:grid-cols-5 grid-cols-2 gap-2 ">
          {cuisines.map((cuisines, index) => (
            <li className=" list-none " key={index}>
              <input
                type="checkbox"
                id={`cuisine-${index}`}
                className="hidden peer"
                value={cuisines.name}
                {...register("servesCuisine", {
                  required: true,
                })}
              />
              <label
                htmlFor={`cuisine-${index}`}
                className="inline-block  items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img src={cuisines.img} className="w-12 h-12" alt="" />
                <div className="w-full text-lg font-semibold">
                  {" "}
                  {cuisines.name}
                </div>
              </label>
            </li>
          ))}
        </div>
        {errors.servesCuisine && errors.servesCuisine.type === "required" && (
          <div className="flex align-middle pt-2 gap-1">
            <AlertCircle className="pt-1" color="#ED4337" size={"20"} />{" "}
            <p className="md:tracking-widest text-red-500">
              please select atleast one cuisine
            </p>
          </div>
        )}
        <ButtonNextBack step={steps} handleBack={handleBack} />
      </form>
    </div>
  );
};
