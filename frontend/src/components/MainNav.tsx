import { useState } from "react"
import Modal from "./Authentication/authModal/AuthModal.tsx"
import { Button } from "./ui/button"
import { AuthDropdown } from "./AuthDropdown/AuthDropdown";
import { useSelector } from "react-redux";

export const MainNav = () => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const {   isAuthenticated } = useSelector((state: any) => state.user);
    return(
        <>

        {
           !isAuthenticated ? <><Button
           className="font-bold "
           onClick={ () => setShowModal(true) }
           >
           Sign In
           </Button>
           <Modal isVisible={showModal} handleClose={ () => setShowModal(false) } /> 
           
           
           </>:
          <AuthDropdown />
        }
        </>
    )
}