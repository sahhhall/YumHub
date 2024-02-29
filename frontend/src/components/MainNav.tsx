import { useState } from "react"
import Modal from "./Authentication/AuthModal/AuthModal"
import { Button } from "./UI/button"
import { AuthDropdown } from "./AuthDropdown/AuthDropdown";

export const MainNav = () => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [test, setTest ] = useState (false)
    return(
        <>

        {
           test ? <><Button
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