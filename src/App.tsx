import React from 'react';
import './App.css';
import world from './world.jpg'
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <div>
                    <img src={world}/>
                </div>
                <div>
                    ava + discrip
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
