import React from "react"
import { useParams } from "react-router-dom"
import { UserProfileTabs } from "@/components/UserProfile/UserProfileTabs/UserProfileTabs"
import { EditProfile } from "@/components/UserProfile/UserProfileContent/EditProfile"
import { ForgetPassword } from "@/components/UserProfile/UserProfileContent/ForgotPassword"

export const UserProfilePage = ( ) => {
    const  {activepage} = useParams();
  
    return (
        <React.Fragment>
             {/* // <UserProfileForm  /> */}
    
        <div className="container md:flex-row flex-col   flex gap-6 mt-6">
            <div style={{maxHeight:'16em'}} className="border md:flex-col    border-black-400">
            <UserProfileTabs activepage={activepage} />
            </div>
            <div style={{height:'36rem'}} className="border md:flex-col flex-1   flex border-black-300  bg-gray-100 sm:ms-12">
               { activepage === 'account-settings' && <EditProfile />}
               { activepage === 'change-password' && <ForgetPassword />}
            </div>
        </div>
        </React.Fragment>
       

    )
}