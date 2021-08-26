import React from 'react';
import styles from './HeroPhoto.module.scss';
import hero from '../../assets/maryHero.jpg'

const HeroPhoto = () => {
    return (
        <div className={styles.photoFrame}>
            <img src={hero} alt="hero" className={styles.picture}/>
        </div>
    );
};

export default HeroPhoto;