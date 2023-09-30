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
            <SocialIcons />
            <ScrollDown />
        </>
    );
}

export default HomePage;
