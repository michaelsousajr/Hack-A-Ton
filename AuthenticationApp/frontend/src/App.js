import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignupPage from './components/SignupPage.jsx';


// npm install scrollreveal
function App() {
    return (
        <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="/signup" Component={SignupPage}/>
        </Routes>
    );
};

export default App;
