import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"


export const LoadingButton = () => {
    return(
        <Button disabled>
            <Loader2 className=" animate-spin" />
        </Button>
    )
} 