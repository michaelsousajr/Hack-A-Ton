import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
<<<<<<< HEAD
import Login from './components/LoginPage';
=======
import LoginPage from './components/LoginPage.jsx';
>>>>>>> a5c729490480c0580da4026a00d4d745884f4149

// npm install scrollreveal
function App() {
    return (
        <Routes>
            <Route path="/" Component={HomePage}/>
<<<<<<< HEAD
            <Route path="/MockLogin" element={<Login />} />
=======
            <Route path="/login" Component={LoginPage}/>
>>>>>>> a5c729490480c0580da4026a00d4d745884f4149
        </Routes>
    );
};

export default App;