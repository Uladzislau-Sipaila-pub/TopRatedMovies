import { connect } from 'react-redux';
import Film from './Film';
import {
    loadFilm,
    loadRecommendations
} from '../../actions/film';
import { toggleSortValue } from '../../actions/sortBy';

const mapStateToProps = state => {
    return {
        film: state.film.film,
        isLoaded: !state.film.loading,
        loadingRec: !state.film.loadingRec,
        recommendations: state.film.recommendations,
        sortValues: state.sortBy.sortValues,
        activeSortValue: state.sortBy.activeSortValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortValueChange: (sortValues, activeSortValue) => {
            dispatch(toggleSortValue(sortValues, activeSortValue))
        },
        loadRecommendations: (id) => {
            dispatch( loadRecommendations(id) );
        },
        loadFilm: (id) => {
            dispatch( loadFilm(id) );
        },
        sortFilms: (films, sortBy) => {
            function parseDate(film) {
                return film.release_date.split('-').join('');
            }

            return films.sort((filmA, filmB) => {
                switch(sortBy) {
                    case 'rating':
                        return filmB.vote_average - filmA.vote_average;
                    case 'date':
                    default:
                        return parseDate(filmB) - parseDate(filmA);
                }
            });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Film);