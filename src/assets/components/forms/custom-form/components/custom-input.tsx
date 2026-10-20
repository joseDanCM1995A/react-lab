import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";
import './custom-input.css'

interface Props<T extends FieldValues>{
    name: Path<T>,
    control: Control<T>,
    label: string,
    type?: string,
    error?: FieldError
}

const InputForm = <T extends FieldValues>({name, control, label, type, error}: Props<T>) => {
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