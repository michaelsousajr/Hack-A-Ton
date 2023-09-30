import React from 'react';
import styles from './Section.module.css';

function Section({ title, description, imageUrl, buttonText, onButtonClick }) {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                {buttonText && <button onClick={onButtonClick} className={styles.button}>{buttonText}</button>}
            </div>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} alt={title} className={styles.image} />
            </div>
        </section>
    );
}

export default Section;
