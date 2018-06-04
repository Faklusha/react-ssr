import React from 'react';
import {Link} from 'react-router-dom'
import styles from './_film-list.css';

const FilmListItem = ({title, id, date, genre, path}) => (
    <Link to={{pathname: `/film/${id}`}}>
        <div className={styles["film-list__item"]}>
            <div className={styles["description__block_picture"]}>
                <img src={path}/>
            </div>
            <div className={styles["film-list__item_info"]}>
                <span className={styles["item__title"]}>{title}</span>
                <span className={styles["item__date"]}>{date}</span>
                <span className={styles["item__category"]}>{genre}</span>
            </div>
        </div>
    </Link>
);

export default FilmListItem;
