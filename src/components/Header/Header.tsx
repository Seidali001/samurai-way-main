import React from 'react';
import hivar from "../../hivar.png";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <div className={s.header}>
            <header>
                <img className="logo-header"
                     src={hivar}
                     alt="logo"/>
                <div className={s.loginLink}>
                    {isAuth ?
                        <NavLink to={"/profile"}>
                            {login}
                        </NavLink>
                        :
                        <NavLink to={"/login"}>
                            Login
                        </NavLink>}
                </div>
            </header>
        </div>
    )
}
export default Header;