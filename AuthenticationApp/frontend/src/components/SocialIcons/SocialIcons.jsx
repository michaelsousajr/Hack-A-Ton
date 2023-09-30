import React, { useEffect } from 'react';
import styles from './SocialIcons.module.css';
import ScrollReveal from 'scrollreveal';

function SocialIcons() {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.icons}`, { delay: 450, origin: 'left' });
    }, []);

    return (
        <div className={styles.icons}>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-youtube-line"></i></a>
            <a href="#"><i className="ri-facebook-box-line"></i></a>
        </div>
    );
}

export default SocialIcons;
