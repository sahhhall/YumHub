import { Input } from "@/components/ui/input";

type EmailInputProps = {
    label:string;
    type:string;
    name:string;
    value:string;
    changeHandler: ( event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const EmailInput = ( props: EmailInputProps ) => {
    return(
        <>
             <label>
                {props.label}
                <Input type={props.value} autoComplete={"off"} name={props.name} value={props.value} onChange={props.changeHandler} />
            </label>
        </>
    )
}

