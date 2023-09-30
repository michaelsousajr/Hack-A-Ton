import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1>Welcome to OpenSource & Cybersecurity Hub</h1>
                <p>Explore the world of open-source software and dive deep into the essentials of cybersecurity.</p>
            </div>
            <div className="content">
                <button className="button" onClick={() => alert("Welcome to OpenSource!")}>Learn OpenSource</button>
                <button className="button" onClick={() => alert("Welcome to Cybersecurity!")}>Learn Cybersecurity</button>
            </div>
        </div>
    );
}

export default App;

