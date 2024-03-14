import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

const RestrauntSchema = z.object({
    restaurantName: z.string().min(3).max(15)

})

type RestrauntSchemaType = z.infer<typeof RestrauntSchema>
const MangeRestrauntForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<RestrauntSchemaType>({
        resolver: zodResolver(RestrauntSchema)
    })

    const onsubmit: SubmitHandler<RestrauntSchemaType> = (formdata) => {
        console.log(formdata);
    }

    return(
        <form onSubmit={handleSubmit(onsubmit)}>
            
        </form>
    )
}