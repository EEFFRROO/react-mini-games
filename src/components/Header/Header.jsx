import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../constants/routes";

import styles from './Header.module.scss';
import clsx from "clsx";

const Header = (props) => {
    const {className} = props;
    return (
        <div className={clsx(styles.wrapper, className)}>
            <nav className={styles.nav}>
                <NavLink to={routes.main} activeClassName={styles.activeLink} className={styles.link}>Главная</NavLink>
                <NavLink to={routes.games} activeClassName={styles.activeLink} className={styles.link}>Игры</NavLink>
                <NavLink to={routes.about} activeClassName={styles.activeLink} className={styles.link}>О нас</NavLink>
            </nav>
        </div>
    );
};

export default Header;