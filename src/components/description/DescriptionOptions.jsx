import React, {Component} from 'react';
import {SORT_FIELDS} from './consts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeSortField, fetchFilms} from '../../modules/films';
import {resolveUrl} from '../../modules/actions/utils/resolveUrl';
import styles from './_description.css';

@connect(({state}) => ({
    sortField: state.sortField,
    searchField: state.searchField,
    searchValue: state.searchValue,
}), {changeSortField, fetchFilms})

export default class DescriptionOptions extends Component {
    changeField = (value) => {
        const {dispatch, sortField, searchField, searchValue, fetchFilms, changeSortField} = this.props;
        if (sortField !== value) {
            const params = resolveUrl(searchValue, searchField, sortField);
            changeSortField(value);
            fetchFilms(params);
        }
    };

    resolveFieldClassName = (value) => {
        const {sortField} = this.props;
        return value === sortField ? styles["description-options__button--active"] : styles["description-options__button"]
    };

    render() {
        return (
            <div className={styles["description-options"]}>
                <span className={styles["description__title"]}>Sort by</span>
                <div
                    className={this.resolveFieldClassName(SORT_FIELDS.release.name)}
                    onClick={() => this.changeField(SORT_FIELDS.release.name)}>
                    {SORT_FIELDS.release.title}
                </div>
                <div
                    className={this.resolveFieldClassName(SORT_FIELDS.raiting.name)}
                    onClick={() => this.changeField(SORT_FIELDS.raiting.name)}>
                    {SORT_FIELDS.raiting.title}
                </div>
            </div>
        );
    }
}

