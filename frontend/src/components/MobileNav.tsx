import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"

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
