import { connect } from 'react-redux';
import TopRated from './TopRated';
import { loadFilms } from '../../actions/films';

const mapStateToProps = state => {
    return {
        films: state.films.films,
        isLoaded: !state.films.loading,
        page: state.films.page,
        totalPages: state.films.totalPages,
        totalResults: state.films.totalResults
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        loadFilms: page => {
            dispatch(loadFilms(page));
        },
        selectPage: page => {
            props.history.push(`/?page=${page}`);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopRated);