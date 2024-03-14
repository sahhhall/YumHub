import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    Separator,
  } from "@radix-ui/react-dropdown-menu";
  import { ChevronDown, CircleUserRound } from "lucide-react";
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
          withCredentials: true,
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
      setisDropDown((prev) => !prev);
    };
  
    return (
      <div className="flex justify-center md:flex-row md:translate-x-0 flex-col w-full  ">
        {/* <div className=" whitespace-nowrap ">
            <Link to={'/user/manage-restaurant'}>
            <button className="w-full md:pe-5 md:py-0 py-3 font-bold   hover:bg-gray-100 md:font-semibold tracking-wide ">manage restaurant</button>
            </Link>
         
        </div> */}
  
        <DropdownMenu onOpenChange={(isDropDown) => setisDropDown(isDropDown)}>
          <DropdownMenuTrigger
            className="w-full  sm:py-0 py-3  justify-center font-bold  sm:text-black-800 sm:font-medium tracking-widest flex hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            <div className="ms-1 flex  ">
              <div className="flex justify-center md:pt-1 pe-1  ">
                <CircleUserRound height={20} width={20} />
              </div>
              {user.name} <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          {isDropDown && (
            <DropdownMenuContent className="pt-1 ">
              <Link to="/user/account-settings" onClick={closeDropdownMenu}>
                <CustomDropdownMenuItem>Profile</CustomDropdownMenuItem>
              </Link>
              <Separator />
              <CustomDropdownMenuItem>
                <button
                  className="tracking-widest font-normal text-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </CustomDropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    );
  };
  