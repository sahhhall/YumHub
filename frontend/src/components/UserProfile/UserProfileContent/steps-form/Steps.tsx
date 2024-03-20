import { useFormContext } from "@/context/FormProvider";
import "./steps.css";

export const Steps = () => {
  const { steps } = useFormContext();

  return (
    <div className="">
      <ul className="  flex  md:ps-12 justify-between form-steps  w-full">
        <li className="">
          <span className={steps === 1 ? "active-step" : ""}>1</span>
        </li>
        <li>
          <span className={steps === 2 ? "active-step" : ""}>2</span>
        </li>
        <li>
          <span className={steps === 3 ? "active-step" : ""}>3</span>
        </li>
      </ul>
    </div>
  );
};
