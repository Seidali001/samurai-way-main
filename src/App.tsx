import React from 'react';
import './App.css';
import hivar from './hivar.png'


function App() {
    return (
        <div className="App app-wrapper">
            <div className="header">
                <header>
                    <img
                        src={hivar}
                        alt="logo"/>
                </header>
            </div>
            <nav className="nav">
                <div>
                    Profile
                </div>
                <div>
                    Message
                </div>
                <div className="content">
                    Main content
                </div>
            </nav>
        </div>
    );
}

export default App;
