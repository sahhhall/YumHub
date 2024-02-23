import { Button } from "@/components/ui/button";
import { useState } from "react";
import PasswordInput from "../authInputs/PasswordInput";
import EmailInput from "../authInputs/EmailInput";

type FormProps = {
    onClick: () => void;
}

type FormDataType  = {
    email: string;
    password: string;
}

const LoginForm = ({ onClick }: FormProps) => {
    const [formData, setFormData] = useState<FormDataType>({
        email: '',
        password: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <EmailInput label={"mail:"} type={"email"} name={"email"} value={formData.email} changeHandler={handleInputChange} />
            <br />
            <PasswordInput label={"Password:"} type={"password"} name={"password"} value={formData.password} changeHandler={handleInputChange} />
            <br />
            <Button className="w-full" type="submit" >Login</Button>
            <div className="border-t-2  mt-3 border-ligthgray">
                    <p className="text-xs pt-1 tracking-wide">
New to YumHub? <span className="cursor-pointer text-blue-800" onClick={onClick} >Create account</span> </p>
                </div>
        </form>
        
    );
}

export default LoginForm;
