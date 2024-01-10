import React from 'react';
import hivar from "../../hivar.png";
import s from "./Header.module.css";

const Header = () => {
    return (
        <div className={s.header}>
            <header>
                <img className="logo-header"
                    src={hivar}
                    alt="logo"/>
            </header>
        </div>
    )
}
export default Header;