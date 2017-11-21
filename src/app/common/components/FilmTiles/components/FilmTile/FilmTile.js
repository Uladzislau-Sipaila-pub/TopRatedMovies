import React from 'react';
import {
    Tile,
    TileImage,
    TileTitle,
    TileFilmInfo,
    TileFilmYear,
    TileFilmDescription
} from './FilmTile.styles';
import { getImageUrl } from '../../../../urls';

const FilmTile = ({film}) =>
    <Tile to={`/film/${film.id}`}>
        <TileImage url={film.poster_path ? getImageUrl(film.poster_path) : ''}/>
        <TileFilmDescription>
            <TileFilmInfo>
                <TileTitle>{film.title}</TileTitle>
                <TileFilmYear>{film.release_date.slice(0, -6)}</TileFilmYear>
            </TileFilmInfo>
        </TileFilmDescription>
    </Tile>;

export default FilmTile;