import z from "zod";

export const schema = z.object({
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
    message: "Las contrasenas son diferentes",
    path: ['confirmPassword']
})

export type FormValues = z.infer<typeof schema>