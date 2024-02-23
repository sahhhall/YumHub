import { X } from "lucide-react";
import LoginForm from "../AuthForms/LoginForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignUpForm from "../AuthForms/SIgnUpForm";

type Props = {
    isVisible: boolean;
    handleClose: () => void;
}

const Modal = ({ isVisible, handleClose }: Props) => {
    if (!isVisible) return null;

    const [ signUpForm, setSignUpForm ] = useState<boolean>(false)
    const handleSubmit = (data: FormData) => {
        console.log(data);
    }
    
    return (
        <div className=" fixed mx-auto my-auto   inset-0 bg-black  backdrop-blur-md bg-opacity-50 flex justify-center items-center">
            <div className="  bg-white flex relative rounded-lg  p-16 ">
                <button className="absolute top-0 right-0 m-4 " onClick={() => handleClose()}>< X /></button>
                {!signUpForm ? <LoginForm  onSubmit={handleSubmit} onClick={() => { setSignUpForm(true)  }}  />: <SignUpForm/>}
               
            </div >
        </div>
    )
}

export default Modal;
