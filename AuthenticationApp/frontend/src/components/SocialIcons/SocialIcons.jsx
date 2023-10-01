import React, { useEffect } from 'react';
import styles from './SocialIcons.module.css';
import ScrollReveal from 'scrollreveal';

function SocialIcons() {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.icons}`, { delay: 450, origin: 'left' });
    }, []);

    return (
         <div className={styles.icons}>
            <a href="https://www.instagram.com/mlhacks/?hl=en"><i className="ri-instagram-line"></i></a>
            <a href="https://www.youtube.com/@Majorleaguehacking"><i className="ri-youtube-line"></i></a>
            <a href="https://www.facebook.com/MajorLeagueHacking/"><i className="ri-facebook-box-line"></i></a>
        </div>
    );
}

export default SocialIcons;
