import { Button } from "@/components/ui/button";
import { useState } from "react";
import {  useDispatch } from 'react-redux';
import { login } from '../../../redux/slices/userSlice';
import PasswordInput from "../AuthInputs/PasswordInput";
import EmailInput from "../AuthInputs/EmailInput";
import axios from 'axios';
type FormProps = {
    onClick: () => void;
    handleClose: () => void;
}

type FormDataType = {
    email: string;
    password: string;
}

const LoginForm = ({ onClick, handleClose }: FormProps) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<FormDataType>({
        email: '',
        password: ''
    });
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData( (prevData) => ({
            ...prevData,
            [ name ] : value
        }) );
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        try{
            const { data } = await axios.post("http://localhost:4001/api/login",{
                email: formData.email,
                password: formData.password
            })
           
            dispatch(login(data.user));
            handleClose();
            
        } catch (error: any) {
            console.log( error.response.data.message);   
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-full">
            <EmailInput 
                label="Email:" 
                type="email" 
                name="email" 
                value={formData.email} 
                changeHandler={handleInputChange} 
            />
            <br />
            <PasswordInput
                label="Password:"
                type="password" 
                name="password" 
                value={formData.password} 
                changeHandler={handleInputChange} 
            />
            <br />
            <Button className="w-full" type="submit">Login</Button>
            <div className="border-t-2 mt-3 border-lightgray">
                <p className="text-xs pt-1 tracking-wide">
                    New to YumHub? <span className="cursor-pointer text-orange-600" onClick={onClick}>Create account</span>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
