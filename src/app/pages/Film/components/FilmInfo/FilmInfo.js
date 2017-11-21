import React from 'react';

import {
    FilmDescription,
    FilmLabel,
    FilmNote,
    FilmPoster,
    FilmPreview,
    FilmRating,
    FilmSummary,
    FilmTitle
} from './FilmInfo.styles';
import { getImageUrl } from '../../../../common/urls';

const FilmInfo = ({film}) =>
    <FilmPreview>
        <FilmPoster image={film.poster_path ? getImageUrl(film.poster_path) : ''}/>
        <FilmSummary>
            <FilmLabel>
                <FilmTitle>{film.title}</FilmTitle>
                <FilmRating>{film.vote_average}</FilmRating>
            </FilmLabel>

            <FilmDescription>{}</FilmDescription>
            <FilmNote>{getFilmDescription(film)}</FilmNote>
            <FilmNote>{film.runtime} min</FilmNote>
            <FilmDescription>{film.overview}</FilmDescription>
        </FilmSummary>
    </FilmPreview>;

function getFilmDescription(film) {
    return film.genres
        .map(genre => genre.name)
        .join(', ');
}

export default FilmInfo;