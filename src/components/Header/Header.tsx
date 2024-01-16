import React from 'react';
import hivar from "../../hivar.png";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <header>
                <img className="logo-header"
                    src={hivar}
                    alt="logo"/>
                <div className={s.loginLink}>
                    <NavLink to={"/login"}>
                        <span className={s.span}>Login</span>
                    </NavLink>
                </div>
            </header>
        </div>
    )
}
export default Header;