import React from "react";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
    activepage: React.ReactNode;
}

export const UserProfileTabs = ({ activepage }: IProps) => {
    return (
        <>
            {activepage === 'account-settings' ? (
                <div className="flex gap-2 text-sm justify-center px-4 py-3 bg-gray-100">
                    <User /> Account Settings
                </div>
            ) : (
                <Link to="/user/account-settings">
                    <div className="flex gap-2 text-sm w-full px-4 py-3">
                        <User /> Account Settings
                    </div>
                </Link>
            )}

            {activepage === 'change-password' ? (
                <div className="flex gap-2 text-sm justify-center bg-gray-100 px-4 py-3">
                    <User /> Change Password
                </div>
            ) : (
                <Link to="/user/change-password">
                    <div className="flex gap-2 text-sm w-full px-4 py-3">
                        <User /> Change Password
                    </div>
                </Link>
            )}
        </>
    );
};
