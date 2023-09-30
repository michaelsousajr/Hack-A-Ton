import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CybersecurityNews from "./components/TechnologyNews.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/news" Component={CybersecurityNews} />
    </Routes>
  );
}

export default App;
