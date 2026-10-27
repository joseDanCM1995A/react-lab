import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./routers/login";
import { PrivateGuard } from "./routers/guards/guard";
import { PrivateRouter } from "./private-routers";
import { RoutesWithNotFound } from "./routes-with-not-found";

 interface Props  {
    children: ReactNode
 }

 export const AppRouter =({children}: Props) => {
    return(
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={"/login"}/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route element={<PrivateGuard/>}>
                   <Route path="/private/*" element={<PrivateRouter/>}></Route>
                </Route>
            </RoutesWithNotFound>
            {children}
        </BrowserRouter>
    )
 }