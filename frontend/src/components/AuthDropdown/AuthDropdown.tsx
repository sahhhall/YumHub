import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CustomDropdownMenuItem } from "./CustomDropdownMenuItem";

export const AuthDropdown = () => {
    const handleLogout = () => {
        // Logic for handling logout
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-black-800 font-medium tracking-widest flex hover:bg-gray-100">
                sahhalll <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-1">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <CustomDropdownMenuItem>Profile</CustomDropdownMenuItem>
                <Separator />
                <CustomDropdownMenuItem>
                    <button
                        className="tracking-widest font-normal text-sm "
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </CustomDropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
