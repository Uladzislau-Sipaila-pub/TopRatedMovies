import {
    RECEIVE_FILMS,
    REQUEST_FILMS
}from '../actions/films';

export const films = (
    state = {
        loading: false,
        films: [],
        page: 0,
        totalPages: 0,
        totalResults: 0
    },
    action
) => {
    switch (action.type) {
        case RECEIVE_FILMS:
        case REQUEST_FILMS:
            return {
                loading: action.loading,
                films: action.films,
                page: action.page,
                totalPages: action.totalPages,
                totalResults: action.totalResults
            };
        default:
            return state;
    }
};