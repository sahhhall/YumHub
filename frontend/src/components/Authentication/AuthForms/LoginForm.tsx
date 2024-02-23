import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { log } from "console";
import { useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

type FormProps = {
    onClick: () => void;
}

type FormDataType  = {
    credential: string;
    password: string;
}

const LoginForm = ({ onClick }: FormProps) => {
    const [formData, setFormData] = useState<FormDataType>({
        credential: '',
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
            <label>
                username or mail:
                <Input type="text" name="credential" value={formData.credential} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Password:
                <Input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
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
