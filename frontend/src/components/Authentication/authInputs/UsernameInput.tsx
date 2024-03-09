import { Input } from "@/components/ui/input";

type UsernameInputProps = {
    label:string;
    type:string;
    name:string;
    value:string;
    changeHandler: ( event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UsernameInput = ( props: UsernameInputProps ) => {
    return(
        <>
         <label>
                {props.name}
                <Input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.changeHandler}
                autoComplete={"off"} 
                required
                />
         </label>
        </>
    )
}

