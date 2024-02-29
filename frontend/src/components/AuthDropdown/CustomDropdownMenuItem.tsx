import './CustomDropDown.css'

interface ICustomDropdownMenuItemProps {
    children: React.ReactNode;
}

export const CustomDropdownMenuItem: React.FC<ICustomDropdownMenuItemProps> = ({ children }) => {
    return (
        <li className="list-none list-hover">
            {children}
        </li>
    );
};