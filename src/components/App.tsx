import {NavLink, Route} from "react-router-dom";
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
import ProfileContainer, {ConnectedUserProfileContainer} from "./Profile/ProfileContainer";
import {ConnectedHeaderComponent} from "./Header/HeaderContainer/HeaderContainer";


function App() {

/*    const dialogPages = useSelector<AppRootStateType, DialogPagesType>(state => state.dialogPages)
    const profilePages = useSelector<AppRootStateType, ProfilePagesType>(state => state.profilePage)*/
    return (
        <div className="app-wrapper">
            <ConnectedHeaderComponent />
            <Navbar/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <NavLink to={"/profile"}/>
                <NavLink to={"/dialogs"}/>
                <NavLink to={"/users"}/>
                <NavLink to={"/news"}/>
                <NavLink to={"/setting"}/>
                   {/* <Route path={"/*"}
                           render={() => <img alt={"error"} src={error} style={{width: "100%", height: "100%"}}/>}/>*/}
                    <Route path={"/dialogs"} render={() => <DialogsContainer
                        state={store.getState()}/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ConnectedUserProfileContainer />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/users"} render={() => <ConnectedUsersContainer />}/>
                {/*<Route path={"/login"} render={() => <ConnectedHeaderComponent/> }/>*/}
                    <Route path={"/setting"} render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
