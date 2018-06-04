import React from 'react';
import styles from './_film-description.css';

const FilmDescription = ({selectedFilm: {title, overview, release_date, runtime, genres, poster_path}}) => (
    <div className={styles["description__block"]}>
        <div className={styles["description__block_picture"]}>
            <img src={poster_path}/>
        </div>
        <div className={styles["description__block_info"]}>
            <span className={styles["info__title"]}>{title}</span>
            <span className={styles["info__description"]}>{genres}</span>
            <div>
                <span className={styles["info__date"]}>{release_date}</span>
                <span className={styles["info__timeline"]}>{runtime}</span>
            </div>
            <span className={styles["info__description"]}>{overview}</span>
        </div>
    </div>
);

export default FilmDescription;
