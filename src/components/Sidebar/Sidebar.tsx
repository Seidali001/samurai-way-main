import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{
            top: '65%',
            height: '70px'
        }} className={`${s.sideBar}`}>
            <div>
                <ul>

                </ul>
                {/*<div className={s.item}>
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
                    <NavLink to={"/news"} className={({isActive}) => (isActive ? s.active : s.link)}>News</NavLink>
                </div>
*/}
            </div>

        </div>

    );
};

export default Sidebar;