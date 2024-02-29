import React from "react";
import './CustomDropDown.css';

interface ICustomDropdownMenuItemProps {
    children: React.ReactNode;
}

export const CustomDropdownMenuItem: React.FC<ICustomDropdownMenuItemProps> = ({ children }) => {
    return (
        <li className="list-none list-hover tracking-widest font-normal text-sm  px-4 py-2  text-start">
            {children}
        </li>
    );
};
