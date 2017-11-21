import {
    RECEIVE_FILM,
    REQUEST_FILM,
    RECEIVE_RECOMMENDATIONS,
    REQUEST_RECOMMENDATIONS
} from '../actions/film';

export const film = (
    state = {
        loading: false,
        loadingRec: false,
        film: {},
        recommendations: [],
        id: 0,
        recId: 0
    },
    action
) => {
    switch (action.type) {
        case RECEIVE_FILM:
        case REQUEST_FILM:
            return Object.assign({}, state, {
                loading: action.loading,
                film: action.film,
                id: action.id
            });
        case RECEIVE_RECOMMENDATIONS:
        case REQUEST_RECOMMENDATIONS:
            return Object.assign({}, state, {
                recId: action.recId,
                recommendations: action.recommendations,
                loadingRec: action.loadingRec
            });
        default:
            return state;
    }
};