import { Head } from "@/components/profile/Banner"
import { UserProfileForm } from "@/forms/user-profile/UserProfileForm"
import { useParams } from "react-router-dom"

export const UserProfilePage = ( ) => {
    const  {activepage} = useParams();
    alert(activepage)
    return (
        // <UserProfileForm  />
        <Head />
    )
}