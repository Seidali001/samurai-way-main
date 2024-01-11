import {NavLink, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Setting from "./Setting/Setting";
import error from "./error.jpg"
import Sidebar from "./Sidebar/Sidebar";

import {useSelector} from "react-redux";
import store, {AppRootStateType} from "../redux-store/redux-store";
import {DialogPagesType, ProfilePagesType} from "../reducers/types";
import DialogsContainer from "./DialogsContainer/DialogsContainer";
import {ConnectedUsersContainer} from "./Users/UsersContainer";
import React from "react";


function App() {

    const dialogPages = useSelector<AppRootStateType, DialogPagesType>(state => state.dialogPages)
    const profilePages = useSelector<AppRootStateType, ProfilePagesType>(state => state.profilePage)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <NavLink to={"/profile"}/>
                <NavLink to={"/dialogs"}/>
                <NavLink to={"/users"}/>
                <NavLink to={"/news"}/>
                <NavLink to={"/setting"}/>
                <Routes>
                    <Route path={"/*"}
                           element={<img alt={"error"} src={error} style={{width: "100%", height: "100%"}}/>}/>
                    <Route path={"/dialogs/*"} element={<DialogsContainer
                        state={store.getState()}/>}/>
                    <Route path={"/profile"} element={<Profile
                        state={store.getState().profilePage}/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/users"} element={<ConnectedUsersContainer/>}/>

                    <Route path={"/setting"} element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
