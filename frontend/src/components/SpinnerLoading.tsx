import { Loader2 } from "lucide-react";

export const SpinnerLoading = () => {
  return (
    <div className=" overflow-hidden mt-[17%]  flex items-center justify-center">
      {" "}
      <Loader2 className="animate-spin" />
    </div>
  );
};
