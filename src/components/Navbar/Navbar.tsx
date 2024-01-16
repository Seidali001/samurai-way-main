import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const Navbar = () => {

    const location = useLocation();

    return (<div style={{position: 'relative', width: '17.625rem'}}>
            <nav className={`${s.nav}`}>
                <div>
                    <div className={s.item}>
                        <span className={s.link}>
                            <NavLink to={"/profile"}
                                     activeClassName={s.active}
                                     /*className={location.pathname === '/profile' ? s.active : s.link}*/
                                /*className={({isActive}) => (isActive ? s.active : s.link)}*/
                            >Profile</NavLink>
                        </span>

                    </div>
                </div>
                <div>
                    <div className={s.item}>
                        <span className={s.link}>

                        <NavLink to={"/dialogs"}
                                 activeClassName={s.active}
                        >Messages</NavLink>
                        </span>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <span className={s.link}>
                        <NavLink to={"/users"}
                                 activeClassName={s.active}
                        >Users</NavLink>
                        </span>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <span className={s.link}>
                        <NavLink to={"/news"}
                                 activeClassName={s.active}
                        >News</NavLink>
                        </span>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <span className={s.link}>
                        <NavLink to={"/setting"}
                                 activeClassName={s.active}
                        >Settings</NavLink>
                        </span>
                    </div>

                </div>
            </nav>
        </div>

    )
}
export default Navbar;