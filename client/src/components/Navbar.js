import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }
    return (
        <nav >
            <div className="nav-wrapper teal text-lighten-5">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/"
                           onClick={logoutHandler}
                    >Выйти</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}