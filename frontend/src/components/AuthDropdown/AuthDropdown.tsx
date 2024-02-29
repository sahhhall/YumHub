import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CustomDropdownMenuItem } from "./CustomDropdownMenuItem";

export const AuthDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-black-800 font-medium tracking-widest flex hover:bg-gray-100">
                sahhalll <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="pt-1">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <CustomDropdownMenuItem>Profile</CustomDropdownMenuItem>
                <CustomDropdownMenuItem>Billing</CustomDropdownMenuItem>
                <CustomDropdownMenuItem>Team</CustomDropdownMenuItem>
                <CustomDropdownMenuItem>Subscription</CustomDropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

