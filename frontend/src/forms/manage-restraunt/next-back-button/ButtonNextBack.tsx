import { Button } from "@/components/ui/button"

type TProps = {
    step: number;
    handleBack?: any ;
}

export const ButtonNextBack = ( {step, handleBack}: TProps ) => {
    return (
        <>
         <div className="flex justify-end mt-4 gap-2">
        {step >= 2 ?  <Button  onClick={handleBack}>Back</Button> : <Button disabled>Back</Button> }
       
        <Button type="submit" >Next</Button>
        </div>
        </>
    )
}