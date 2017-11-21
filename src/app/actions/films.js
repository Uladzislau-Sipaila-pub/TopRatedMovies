import 'isomorphic-fetch';
import { getTopRated } from '../common/urls';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export function requestFilms(page) {
    return {
        type: REQUEST_FILMS,
        page,
        loading: true,
        films: [],
        totalResults: 0
    }
}

export function receiveFilms(response) {
    return {
        type: RECEIVE_FILMS,
        loading: false,
        films: response.results,
        page: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results
    }
}

export function loadFilms(page) {
    return dispatch => {
        dispatch( requestFilms(page) );
        return fetch(getTopRated(page))
            .then( response => response.json() )
            .then( response => dispatch( receiveFilms(response) ) );
    };
}