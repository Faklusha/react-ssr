import React from 'react';
import DescriptionOptions from './DescriptionOptions';
import styles from './_description.css';

const Description = ({isShownOptions, count}) => (
    <div className={styles.description}>
        <span className={styles["description__title"]}>{count} items found</span>
        {isShownOptions && <DescriptionOptions/>}
    </div>
);
export default Description;
