import { Navigate, Route } from "react-router-dom"
import { About } from "./routers/about"
import { User } from "./routers/user"
import { Dashboard } from "./routers/dashboard"
import { RoutesWithNotFound } from "./routes-with-not-found"

 export const PrivateRouter = () => {
    return(
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={"/dashboard"}/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/user" element={<User/>}></Route>
        </RoutesWithNotFound>
    )
 }