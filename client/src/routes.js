import React from 'react';
import { Route, Routes} from "react-router-dom";
import {FormInputPage} from "./pages/FormInputPage";
import {AuthPage} from "./pages/AuthPage";

export const useRouter = (isAuthenticated) => {

    if(isAuthenticated){
        return (
                <Routes>
                     <Route  path='/' element={<FormInputPage />} exact>

                     </Route>
                </Routes>

    )}
        return (
            <Routes>
                <Route path='/' element={<AuthPage/>} exact/>
            </Routes>
        )
    }





