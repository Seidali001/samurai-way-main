import React from 'react';
import './App.css';
import './logo-hivar.png'

function App() {
    return (
        <div className="App app-wrapper">
            <header>
                <img src="logo-hivar.png" alt="logo-hivar"/>
            </header>
            <nav>
                <div>
                    Profile
                </div>
                <div>
                    Message
                </div>
                <div>
                    Main content
                </div>
            </nav>
        </div>
    );
}

export default App;
