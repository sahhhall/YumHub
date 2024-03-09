import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "sonner";


export const PrivateRoute = () => {
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    
    if(!isAuthenticated) {
        return <Navigate to="/" replace/> 
    }
    return <Outlet />
};
