import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import Login from './components/LoginPage';

// npm install scrollreveal
function App() {
    return (
        <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/MockLogin" element={<Login />} />
        </Routes>
    );
};

export default App;