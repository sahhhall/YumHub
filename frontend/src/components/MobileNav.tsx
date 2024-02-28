import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./UI/sheet"
import { Button } from "./UI/button"

export const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span></span>
                </SheetTitle>
                <SheetDescription className="flex py-4">
                    <Button className="flex-1 text-white  font-bold " >
                        Sign In
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
