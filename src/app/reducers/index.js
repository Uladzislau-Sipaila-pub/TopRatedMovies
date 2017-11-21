import { combineReducers } from 'redux';
import { sortBy } from './sortBy';
import { films } from './films';
import { film } from './film';

const reducers = combineReducers({
    sortBy,
    films,
    film
});

export default reducers;