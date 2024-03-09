import { useState } from "react";
import { UsernameInput } from "@/components/Authentication/AuthInputs/UsernameInput";
import { EmailInput } from "@/components/Authentication/AuthInputs/EmailInput";
import { PasswordInput } from "@/components/Authentication/AuthInputs/PasswordInput";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
type FormProps = {
  onClick: () => void;
};

type FormDataType = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = ({ onClick }: FormProps) => {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await axios
        .post(`${API_BASE_URL}/api/register`, {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        })
        .then(() => {
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          toast.success("user successfully created go back login");
        });
    } catch (error: any) {
      toast.error(error.response.data.message);
      setIsLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <form method="post" onSubmit={(e) => handleSubmit(e)} className="w-full ">
      <UsernameInput
        label={"Username"}
        name={"username"}
        type={"text"}
        value={formData.username}
        changeHandler={handleInputChange}
      />
      <br />
      <EmailInput
        label={"email"}
        name={"email"}
        type={"email"}
        value={formData.email}
        changeHandler={handleInputChange}
      />
      <br />
      <PasswordInput
        label={"password"}
        name={"password"}
        type={"password"}
        value={formData.password}
        changeHandler={handleInputChange}
      />
      <br />
      <PasswordInput
        label={"confirm-password"}
        name={"confirmPassword"}
        type={"password"}
        value={formData.confirmPassword}
        changeHandler={handleInputChange}
      />
      <br />
      <Button disabled={isLoading} className="w-full" type="submit">
        Create Account
      </Button>
      <div className="border-t-2  mt-3 border-ligthgray">
        <p className="text-xs pt-1 tracking-wide">
          Already have an account?{" "}
          <span className="cursor-pointer text-orange-600 " onClick={onClick}>
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
