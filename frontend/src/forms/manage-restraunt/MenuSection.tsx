import { useFormContext } from "@/context/FormProvider"
import { useForm } from "react-hook-form"
import { ButtonNextBack } from "./next-back-button/ButtonNextBack";



export const MenuSection = () => {
    const { handleSubmit, register} = useForm();
    const { steps, setSteps } = useFormContext();
    const onsubmit = ( data: any) => {

    }

    const handleBack = () => {
        setSteps(steps - 1)
    }
    return(
        <div className="flex">
       
            <form onSubmit={handleSubmit(onsubmit)} >
            <ButtonNextBack step={steps} handleBack={handleBack} />
            </form>

        </div>
    )
}