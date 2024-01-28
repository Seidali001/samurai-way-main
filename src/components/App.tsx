import {NavLink, Route} from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Setting from "./Setting/Setting";
import error from "./error.jpg"
import Sidebar from "./Sidebar/Sidebar";
import {ConnectedDialogsComponent} from "./DialogsContainer/DialogsContainer";
import {ConnectedUsersContainer} from "./Users/UsersContainer";
import React from "react";
import {ConnectedUserProfileContainer} from "./Profile/ProfileContainer";
import {ConnectedHeaderComponent} from "./Header/HeaderContainer/HeaderContainer";
import Login from "./Login/Login";


function App() {

    return (
        <div className="app-wrapper">
            <ConnectedHeaderComponent/>
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
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/dialogs"} render={() => <ConnectedDialogsComponent />}/>
                <Route path={"/profile/:userId?"} render={() => <ConnectedUserProfileContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/users"} render={() => <ConnectedUsersContainer/>}/>
                <Route path={"/setting"} render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
