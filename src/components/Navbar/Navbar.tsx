import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {


    return (<div style={{position: 'relative', width: '17.625rem'}}>
            <nav className={`${s.nav}`}>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/profile"}
                                 activeClassName={s.active}
                            /*className={({isActive}) => (isActive ? s.active : s.link)}*/
                                 >Profile</NavLink>
                    </div>
                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/dialogs"}
                                 activeClassName={s.active}
                                 >Messages</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/users"}
                                 activeClassName={s.active}
                                 >Users</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/news"}
                                 activeClassName={s.active}
                                 >News</NavLink>
                    </div>

                </div>
                <div>
                    <div className={s.item}>
                        <NavLink to={"/setting"}
                                 activeClassName={s.active}
                                 >Settings</NavLink>
                    </div>

                </div>
            </nav>
        </div>

    )
}
export default Navbar;