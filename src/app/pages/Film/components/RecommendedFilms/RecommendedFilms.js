import React from 'react';
import FilmTiles from '../../../../common/components/FilmTiles/FilmTiles';

const RecommendedFilms = ({recommendations}) =>
    <FilmTiles films={recommendations}/>;

export default RecommendedFilms;