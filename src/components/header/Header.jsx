import React from 'react';
import {Link} from 'react-router-dom'
import styles from './_header.css';

const Header = ({isFilmSelected, resetSelectedFilm}) => (
    <div className={styles.header}>
        <span className={styles["main-title"]}>netflixroulette</span>
        {
            isFilmSelected &&
            <Link to={{pathname: `/`}}>
                <div
                    onClick={() => resetSelectedFilm && resetSelectedFilm()}
                    className={styles["search-button"]}>
                    SEARCH
                </div>
            </Link>
        }
    </div>
);

export default Header;
