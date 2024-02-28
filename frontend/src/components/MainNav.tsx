import { useState } from "react"
import Modal from "./Authentication/AuthModal/AuthModal"
import { Button } from "./UI/button"

export const MainNav = () => {
    const [ showModal, setShowModal ] = useState<boolean>(false);

    return(
        <>
        <Button
        className="font-bold "
        onClick={ () => setShowModal(true) }
        >
        Sign In
        </Button>
        <Modal isVisible={showModal} handleClose={ () => setShowModal(false) } />
        </>
    )
}