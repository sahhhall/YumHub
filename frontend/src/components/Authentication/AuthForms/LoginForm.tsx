import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/userSlice";
import { PasswordInput } from "@/components/Authentication/authInputs/PasswordInput";
import { EmailInput } from "@/components/Authentication/authInputs/EmailInput";
import axios from "axios";
import { GoogleLoginn } from "../GoogleAuth/GoogleAuth";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
type FormProps = {
  onClick: () => void;
  handleClose: () => void;
};

type FormDataType = {
  email: string;
  password: string;
};

const LoginForm = ({ onClick, handleClose }: FormProps) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/login`, {
        email: formData.email,
        password: formData.password,
      });

      dispatch(login(data.user));
      handleClose();
      toast.success(`welcome back ${data.user.name}`);
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  };

  const handleGuest = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFormData({
      email: "guest@gmail.com",
      password: "123456",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full">
      <EmailInput
        label={"Email:"}
        type={"email"} 
        name={"email"}
        value={formData.email}
        changeHandler={handleInputChange}
      />
      <br />
      <PasswordInput
        label={"Password:"}
        type={"password"}
        name={"password"}
        value={formData.password}
        changeHandler={handleInputChange}
      />
      <br />
      <GoogleLoginn />
      <Button className="w-full" type="submit">
        Login
      </Button>
      <button
        className="w-full border border-black rounded-sm py-1 font-semibold mt-3 bg-transparent text-black"
        onClick={handleGuest}
      >
        As a Guest{" "}
      </button>
      <div className="border-t-2 mt-3 border-lightgray">
        <p className="text-xs pt-1 tracking-wide">
          New to YumHub?{" "}
          <span className="cursor-pointer text-orange-600" onClick={onClick}>
            Create account
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
