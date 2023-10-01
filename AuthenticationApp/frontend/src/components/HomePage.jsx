import React from 'react';
import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import SocialIcons from './SocialIcons/SocialIcons';
import ScrollDown from './ScrollDown/ScrollDown';

function HomePage() {
    const navigate = useNavigate();

    const fetchOpenSource = () => {
        fetch("/api/v1/learn-opensource")
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
    }

    const fetchCybersecurity = () => {
        fetch("/api/v1/learn-cybersecurity")
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
    }

    return (
        <>
            <Header />
            <Hero />

            <div className="content-section">
                <h1>🧑‍💻Welcome to OpenSource & Cybersecurity Hub</h1>
                <p>Explore the world of open-source software and dive deep into the essentials of cybersecurity.🔎💻🌍</p>

                <div className="buttons">
                    <button className="button" onClick={fetchOpenSource}>Learn OpenSource</button>
                    <button className="button" onClick={fetchCybersecurity}>Learn Cybersecurity</button>
                    <button onClick={() => navigate('/MockLogin')}>Go to Login</button>
                </div>
            </div>

            <SocialIcons />
            <ScrollDown />
        </>
    );
}

export default HomePage;

