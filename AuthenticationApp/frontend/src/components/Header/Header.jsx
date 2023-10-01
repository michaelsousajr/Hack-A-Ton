import React, { useState } from 'react';
import styles from "./Header.module.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <header className={styles.header}>
            <a href="#" className={styles.logo}>MLH Hackathon</a>
            <ul className={`${styles.navlist} ${menuOpen ? styles.open : ""}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div
                onClick={toggleMenu}
                className={`${styles.bx} ${menuOpen ? styles['bx-x'] : styles['bx-menu']}`}
                id={styles['menu-icon']}
            ></div>

            <ul className={`${styles.navlist} ${menuOpen ? styles.open : ""}`}>

            </ul>
        </header>
    );
}

export default Header;
