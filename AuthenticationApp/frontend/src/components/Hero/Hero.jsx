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
                <h1>Learn How To Hack</h1>
                <p>• Dive into the world of ethical hacking through hands-on experiences</p>
                <p>• Explore insightful content in cybersecurity</p> 
                <p>• Unleash your hacking skills responsibly and learn from the best</p>
                <a href="/tuts/main"><i className="ri-book-fill"></i>Our CyberSecurity Tutorial</a>
                <a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbnklGh3FNRLECx_2D_vK3mu" className={styles.ctaa}>
                    <i className="ri-play-fill"></i>FreeCodeCamp Tutorial
                </a>
                <a className={styles.ctaa} href="https://events.mlh.io/events/10005-open-source-hackfest">
                    <i className="ri-flag-fill"></i>MLH - OpenSource HackFest 
                </a>
            </div>
            <div className={styles['hero-img']}>
                <img src="https://i.imgur.com/3fpTayo.png" alt="Hacker Logo" />
            </div>
        </section>
    );
}

export default Hero;
