import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FilmDescription from '../film-description/FilmDescription';
import ErrorBoundary from '../error-boundary/ErrorBoundary';
import {fetchFilmById, resetSelectedFilm} from '../../modules/films';
import styles from './_page.css';

@connect(({state}) => ({
    selectedFilm: state.selectedFilm,
}), {fetchFilmById, resetSelectedFilm})
export default class FilmPage extends Component {
    componentWillMount() {
        const {fetchFilmById, match: {params: {id}}} = this.props;
      fetchFilmById(id);
    }

    resetFilm = () => {
        const {resetSelectedFilm} = this.props;
      resetSelectedFilm();
    }

    render() {
        const {selectedFilm} = this.props;

        return (
            <div className={styles.page}>
                <ErrorBoundary>
                    <Header isFilmSelected/>
                    {selectedFilm && <FilmDescription selectedFilm={selectedFilm}/>}
                    <Footer/>
                </ErrorBoundary>
            </div>
        );
    }
}
