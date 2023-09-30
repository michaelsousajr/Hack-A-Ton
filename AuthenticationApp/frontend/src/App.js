import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';


function App() {
    return (
        <Routes>
            <Route path="/" Component={HomePage}/>
        </Routes>
    );
};

export default App;