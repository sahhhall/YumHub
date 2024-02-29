import { useState } from "react";
import UsernameInput from "../AuthInputs/UsernameInput";
import EmailInput from "../AuthInputs/EmailInput";
import PasswordInput from "../AuthInputs/PasswordInput";
import { Button } from "@/components/UI/button";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

type FormProps = {
    onClick: () => void;
}

type FormDataType = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpForm = ({ onClick }: FormProps) => {
    const [formData, setFormData] = useState<FormDataType>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

   
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const { data } = await axios.post("http://localhost:4001/api/register",{
                name: formData.username,
                email: formData.email,
                password: formData.password
            })
            navigate('/user-profile') 
            return data
        } catch (error: any) {
            console.log( error.response.data.message);   
        }
    }

    return (
        <form method="post" onSubmit={(e) => handleSubmit(e)} className="w-full " >
            <UsernameInput
                label="Username"
                name="username"
                type="text"
                value={formData.username}
                changeHandler={handleInputChange}
            />
            <br />
            <EmailInput
                label="email"
                name="email"
                type="email"
                value={formData.email}
                changeHandler={handleInputChange}
            />
            <br />
            <PasswordInput
                label="password"
                name="password"
                type="password"
                value={formData.password}
                changeHandler={handleInputChange}
            />
            <br />
            <PasswordInput
                label="confirm-password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                changeHandler={handleInputChange}
            />
            <br />
            <Button className="w-full" type="submit" >Create Account</Button>
            <div className="border-t-2  mt-3 border-ligthgray">
                <p className="text-xs pt-1 tracking-wide">
                Already have an account? <span className="cursor-pointer text-orange-600 " onClick={onClick}>Login</span>
                </p>
            </div>
        </form>
    );
}

export default SignUpForm;
