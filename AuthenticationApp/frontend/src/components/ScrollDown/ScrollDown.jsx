import React, { useEffect } from 'react';
import styles from './ScrollDown.module.css';
import ScrollReveal from 'scrollreveal';

function ScrollDown() {
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.scrollDown}`, { delay: 450, origin: 'right' });
    }, []);

    return (
        <div className={styles.scrollDown}>
            <a href="#"><i className="ri-arrow-down-s-fill"></i></a>
        </div>
    );

}

export default ScrollDown;

