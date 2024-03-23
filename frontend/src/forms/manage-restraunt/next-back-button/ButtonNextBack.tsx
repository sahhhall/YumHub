import { LoadingButton } from "@/components/LoadinButton";
import { Button } from "@/components/ui/button";

type TProps = {
  step: number;
  handleBack?: any;
  isPending?: any;
};

export const ButtonNextBack = ({ step, handleBack, isPending }: TProps) => {
  return (
    <>
      <div className="flex justify-end mt-4 gap-2">
        {step >= 2 ? (
          <Button onClick={handleBack}>Back</Button>
        ) : (
          <Button disabled>Back</Button>
        )}
        {isPending ? (
          <LoadingButton />
        ) : (
          <Button type="submit">{step === 3 ? "Finish" : "Next"}</Button>
        )}
      </div>
    </>
  );
};
