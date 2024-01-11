import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {


    return (<div style={{position: 'relative', width: '17.625rem'}}>
            <nav className={`${s.nav}`}>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/profile"}
                                 className={({isActive}) => (isActive ? s.active : s.link)}>Profile</NavLink>
                    </div>
                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/dialogs"}
                                 className={({isActive}) => (isActive ? s.active : s.link)}>Messages</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/users"}
                                 className={({isActive}) => (isActive ? s.active : s.link)}>Users</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/news"} className={({isActive}) => (isActive ? s.active : s.link)}>News</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/setting"}
                                 className={({isActive}) => (isActive ? s.active : s.link)}>Settings</NavLink>
                    </div>

                </div>
            </nav>
        </div>

    )
}
export default Navbar;