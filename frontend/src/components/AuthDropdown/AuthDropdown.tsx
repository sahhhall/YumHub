import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { CustomDropdownMenuItem } from "./CustomDropdownMenuItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices/userSlice";

const  API_BASE_URL = import.meta.env.VITE_API_BASE_URL
axios.defaults.withCredentials = true
export const AuthDropdown = () => {
    const dispatch = useDispatch();
    const {  user } = useSelector((state: any) => state.user);
  
    const sendLogout = async () => {
        const res  = await axios.post(`${API_BASE_URL}/api/logout`,null ,{
            withCredentials: true
        })
        console.log("whattt");
        
        if (res.status = 200) {
            
           
        }else {
            return new Error(" unable to logout ");
        }
    }
    const handleLogout = () => {
       
        sendLogout().then(() => {
            dispatch(logout())
  
        })
       
       
    };

    return (
        <DropdownMenu>
         
            <DropdownMenuTrigger className="text-black-800 font-medium tracking-widest flex hover:bg-gray-100">
                {user.name} <ChevronDown />
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
