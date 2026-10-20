import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import InputForm from "./components/custom-input";

const schema = z.object({
    name: z.string({
      error: (issue) =>
        issue.input === undefined
          ? "El nombre es obligatorio"
          : "Debe ser un texto",
    }).min(1, "El nombre es obligatorio"),
    email: z.email("Correo invalido").min(1, "El correo es obligatorio"),
    password: z.string({
      error: (issue) =>
        issue.input === undefined
          ? "El password es obligatorio"
          : "Debe ser un texto",
    }).min(6, "La contrasena debe de tener al menos 6 caracteres"),
    confirmPassword: z.string(
        {
      error: (issue) =>
        issue.input === undefined
          ? "El comform password es obligatorio"
          : "Debe ser un texto",
    }
    ).min(6, "La confirmacion deve tener al menos 6 caracteres"),
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contrasenas son invalidas",
    path: ['confirmPassword']
})

//creamos el tipado en base al form
type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(schema) 
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