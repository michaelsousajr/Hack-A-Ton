import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import ScrollReveal from 'scrollreveal';

function Hero() {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles['hero-text']}`, { delay: 200, origin: 'top' });
        ScrollReveal().reveal(`.${styles['hero-img']}`, { delay: 450, origin: 'top' });
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles['hero-text']}>
                <h5>MLH - Hackfest</h5>
                <h4>Learn Cybersecurity</h4>
                <h1>Learn How To Hack</h1>
                <p>🔐 Dive into the world of ethical hacking through hands-on experiences | Explore insightful content in cybersecurity | Unleash your hacking skills responsibly and learn from the best 💻🌐 | #HackingJourney</p>
                <a href="#">Our CyberSecurity Blog</a>
                <a href="#" className={styles.ctaa}>
                    <i className="ri-play-fill"></i>Watch Our Youtube Channel
                </a>
            </div>
            <div className={styles['hero-img']}>
                <img src="https://i.imgur.com/3fpTayo.png" alt="Hacker Logo" />
            </div>
        </section>
    );
}

export default Hero;
