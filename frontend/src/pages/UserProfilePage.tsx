import React from "react"
import { Banner } from "@/components/UserProfile/Banner"
import { UserProfileForm } from "@/forms/user-profile/UserProfileForm"
import { useParams } from "react-router-dom"
import { UserProfileTabs } from "@/components/UserProfile/UserProfileTabs/UserProfileTabs"
import { AccountSettings } from "@/components/UserProfile/UserProfileContent/EditProfile"

export const UserProfilePage = ( ) => {
    const  {activepage} = useParams();
  
    return (
        <React.Fragment>
             {/* // <UserProfileForm  /> */}
        <Banner />
      
        <div className="container ms- flex gap-6 mt-6">
            <div className="border  border-black-400">
            <UserProfileTabs activepage={activepage} />
            </div>
            <div className="border border-black-300 px-4 py-3 ms-12">
                <AccountSettings />
            </div>
        </div>
        </React.Fragment>
       

    )
}