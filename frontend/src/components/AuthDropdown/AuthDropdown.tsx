import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CustomDropdownMenuItem } from "./CustomDropdownMenuItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

export const AuthDropdown = () => {
    const [isDropDown, setisDropDown] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector((state: any) => state.user);

    const sendLogout = async () => {
        try {
            await axios.post(`${API_BASE_URL}/api/logout`, null, {
                withCredentials: true
            });
            dispatch(logout());
        } catch (error) {
            console.error("Unable to logout", error);
        }
    };

    const handleLogout = () => {
        sendLogout();
    };

    const closeDropdownMenu = () => {
        setisDropDown(false);
    };

    const toggleDropdown = () => {
        setisDropDown(prev => !prev);
    };

    return (
        <DropdownMenu onOpenChange={isDropDown => setisDropDown(isDropDown)}>
            <DropdownMenuTrigger className="w-full sm:bg-current  sm:py-0 py-3  justify-center font-bold text-black sm:text-black-800 sm:font-medium tracking-widest flex hover:bg-gray-100" onClick={toggleDropdown}>
                {user.name} <ChevronDown />
            </DropdownMenuTrigger>
            {isDropDown && (
                <DropdownMenuContent className="pt-1 ">
                    <Link to="/user/account-settings" onClick={closeDropdownMenu}>
                        <CustomDropdownMenuItem>Profile</CustomDropdownMenuItem>
                    </Link>
                    <Separator />
                    <CustomDropdownMenuItem>
                        <button className="tracking-widest font-normal text-sm" onClick={handleLogout}>Logout</button>
                    </CustomDropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
};
