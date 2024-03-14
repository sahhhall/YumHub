import React from "react";
import { Lock, User, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
    activepage: React.ReactNode;
}

export const UserProfileTabs = ({ activepage }: IProps) => {
    return (
        <>
            {activepage === 'account-settings' ? (
                <div className="flex tracking-widest text-xs gap-2 font-semibold px-4 py-3 bg-gray-100">
                    <User /> Profile
                </div>
            ) : (
                <Link to="/user/account-settings">
                    <div className="flex tracking-widest text-xs gap-2 font-semibold  w-full px-4 py-3">
                        <User /> Profile
                    </div>
                </Link>
            )}

            {activepage === 'change-password' ? (
                <div className="flex tracking-widest text-xs gap-2 font-semibold   bg-gray-100 px-4 py-3">
                    <Lock /> Change Password
                </div>
            ) : (
                <Link to="/user/change-password">
                    <div className="flex tracking-widest text-xs gap-2 font-semibold  w-full px-4 py-3">
                        <Lock  /> Change Password
                    </div>
                </Link>
            )}

            {activepage === 'manage-restaurant' ? (
                <div className="flex tracking-widest text-xs gap-2 font-semibold   bg-gray-100 px-4 py-3">
                    <Utensils />Manage Restaurant
                </div>
            ) : (
                <Link to="/user/manage-restaurant">
                    <div className="flex tracking-widest text-xs gap-2 font-semibold  w-full px-4 py-3">
                    <Utensils /> Manage Restaurant
                    </div>
                </Link>
            )}
        </>
    );
};
