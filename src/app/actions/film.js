import 'isomorphic-fetch';
import {
    getMovieUrl,
    getRecommendedUrl
} from '../common/urls';

export const REQUEST_FILM = 'REQUEST_FILM';
export const RECEIVE_FILM = 'RECEIVE_FILM';
export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';

export function requestFilm(id) {
    return {
        type: REQUEST_FILM,
        id,
        loading: true,
        film: {}
    }
}

export function receiveFilm(id, film) {
    return {
        type: RECEIVE_FILM,
        id,
        film,
        loading: false
    }
}
export function requestRecommendations(recId) {
    return {
        type: REQUEST_RECOMMENDATIONS,
        recId,
        loadingRec: true,
        recommendations: []
    }
}

export function receiveRecommendations(recId, recommendations) {
    return {
        type: RECEIVE_RECOMMENDATIONS,
        recId,
        recommendations,
        loadingRec: false
    }
}

export function loadFilm(id) {
    return dispatch => {
        dispatch( requestFilm(id) );
        return fetch( getMovieUrl(id) )
            .then( response => response.json() )
            .then( response => dispatch( receiveFilm(id, response) ) );
    };
}

export function loadRecommendations(id) {
    return dispatch => {
        dispatch( requestRecommendations(id) );
        return fetch( getRecommendedUrl(id) )
            .then( response => response.json() )
            .then( response => dispatch( receiveRecommendations(id, response.results) ) );
    };
}