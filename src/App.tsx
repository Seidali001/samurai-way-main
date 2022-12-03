import React from 'react';
import './App.css';
import hivar from './hivar.png'
import world from './world.jpg'


function App() {
    return (
        <div className="app-wrapper">
            <div className="header">
                <header>
                    <img
                        src={hivar}
                        alt="logo"/>
                </header>
            </div>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
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
