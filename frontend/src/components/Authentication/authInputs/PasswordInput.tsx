import { Input } from "@/components/ui/input";

type PasswordInputProps = {
    label:string;
    name:string;
    type:string;
    value:string; 
    changeHandler: ( event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ( props:PasswordInputProps ) => {
    return(
        <>
             <label>
                {props.label}
                <Input type={props.type} autoComplete={"off"}  name={props.name} value={props.value} onChange={props.changeHandler} />
            </label>
        </>
    )
}



export default PasswordInput;