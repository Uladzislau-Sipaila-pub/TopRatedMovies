export const CHANGE_SORT_VALUE = 'CHANGE_SORT_VALUE';

export const toggleSortValue = (sortValues = [], activeSortValue = 'date') => {
    return {
        type: CHANGE_SORT_VALUE,
        sortValues,
        activeSortValue
    }
};