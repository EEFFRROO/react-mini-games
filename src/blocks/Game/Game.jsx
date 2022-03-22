import React from 'react';
import styles from './Game.module.scss';

const Game = (props) => {
    const {title, image} = props;
    return (
        <div className={styles.wrapper}>
            <p>{title}</p>
            <img src={image} className={styles.image}/>
        </div>
    );
};

export default Game;