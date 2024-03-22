import { AlertCircle } from "lucide-react";

// type TProps = {
//  errors: any;
// }

export const ValidationErrors = () => {
  return (
    <>
      <div className=" flex">
        <AlertCircle className="pt-1 " color="#ED4337" size={"20"} />{" "}
        <p className="md:tracking-widest text-red-500">please fill somethimg</p>
      </div>
    </>
  );
};
