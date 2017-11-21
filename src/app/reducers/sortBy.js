import { CHANGE_SORT_VALUE } from '../actions/sortBy';

const sortValues = [{
    label: 'release date',
    value: 'date'
}, {
    label: 'rating',
    value: 'rating'
}];

export const sortBy = (
    state = {
        sortValues: sortValues,
        activeSortValue: 'rating'
    },
    action
) => {
    switch (action.type) {
        case CHANGE_SORT_VALUE:
            return {
                sortValues: action.sortValues,
                activeSortValue: action.activeSortValue
            };
        default:
            return state;
    }
};
