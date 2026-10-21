import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputForm from "./components/custom-input";
import { schema, type FormValues } from "./models/props.model";

const CustomForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    })    

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="name" control={control} type="text" label="Name" error={errors.name}/>
            <InputForm name="email" control={control} type="Email" label="Email" error={errors.email}/>
            <InputForm name="password" control={control} type="password" label="Password" error={errors.password}/>
            <InputForm name="confirmPassword" control={control} type="password" label="Confirm Password" error={errors.confirmPassword}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm