import React from 'react';
import Header from "../Header";

import styles from './PageLayout.module.scss';

const PageLayout = (props) => {
    const {children} = props;

    return (
        <div>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default PageLayout;