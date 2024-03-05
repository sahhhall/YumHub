import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CustomDropdownMenuItem } from "./CustomDropdownMenuItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const  API_BASE_URL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true
export const AuthDropdown = () => {
    const [ isDropDown, setIsDropDown ] = useState<boolean>(false);
    const dispatch = useDispatch();
    const {  user } = useSelector((state: any) => state.user);
  
    const sendLogout = async () => {
        const res  = await axios.post(`${API_BASE_URL}/api/logout`,null ,{
            withCredentials: true
        })
        if (res.status !== 200)  return new Error(" unable to logout ");
     
    }
    const handleLogout = () => {
       
        sendLogout().then(() => {
            dispatch(logout())
        })
       
       
    };

    const closeDropdownMenu = () => {
        setIsDropDown(false)
    }

    const toggleDropDown = () => {
        setIsDropDown((prev: boolean) => !prev );
    }
    return (
        <DropdownMenu>
         
            <DropdownMenuTrigger onClick={toggleDropDown} className="text-black-800 font-medium tracking-widest flex hover:bg-gray-100"  >
                {user.name} <ChevronDown />
            </DropdownMenuTrigger>
           {isDropDown && <DropdownMenuContent className="pt-1">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <Link to={'/user/account-settings'}  onClick={closeDropdownMenu} >
                <CustomDropdownMenuItem>
                    Profile</CustomDropdownMenuItem>
                </Link>
               
                <Separator />
                <CustomDropdownMenuItem>
                    <button
                        className="tracking-widest font-normal text-sm "
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </CustomDropdownMenuItem>
            </DropdownMenuContent>}
        </DropdownMenu>
        
    );
};
