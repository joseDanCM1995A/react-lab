import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";
import './custom-input.css'
import type { FormValues } from "../models/props.model";

interface Props{
    name: keyof FormValues,
    control: Control<FormValues>,
    label: string,
    type?: string,
    error?: FieldError
}

const InputForm = ({name, control, label, type, error}: Props) => {
     return(
        <div className="form-group">
            <label htmlFor={name as string}>{label}</label>
            <Controller
                name={name}  
                control={control} 
                render={({field}) => 
                    <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid" : ""} `}/>
                    } 
                />
                {error && <p className="error">{error?.message}</p>}
        </div>
    )  
}

export default InputForm