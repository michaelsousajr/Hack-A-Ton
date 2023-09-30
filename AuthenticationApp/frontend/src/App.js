import React from 'react';
import './App.css';

function App() {
    /**
     * Fetches a greeting message related to Open Source learning.
     *
     * In essence, when you click the "Learn OpenSource" button in your React app,
     * this function fetches the greeting message from the Spring Boot backend
     * and then displays that greeting message in a popup alert in the browser.
     */
    const fetchOpenSource = () => {
        fetch("/api/v1/learn-opensource")       // Makes an HTTP GET request to "/api/v1/learn-opensource"
            .then(response => response.text())    // Once the response is received, extracts the text from the response.
            .then(data => {
                alert(data);                        // Displays an alert with the extracted text data.
            });
    }

    /**
     * Fetches a greeting message related to Cybersecurity learning.
     *
     * In essence, when you click the "Learn Cybersecurity" button in your React app,
     * this function fetches the greeting message from the Spring Boot backend
     * and then displays that greeting message in a popup alert in the browser.
     */
    const fetchCybersecurity = () => {
        fetch("/api/v1/learn-cybersecurity")    // Makes an HTTP GET request to "/api/v1/learn-cybersecurity"
            .then(response => response.text())    // Once the response is received, extracts the text from the response.
            .then(data => {
                alert(data);                        // Displays an alert with the extracted text data.
            });
    }



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

