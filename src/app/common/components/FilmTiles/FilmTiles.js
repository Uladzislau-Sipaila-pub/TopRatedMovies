import React from 'react';
import Tiles from './FilmTiles.styles';
import FilmTile from './components/FilmTile/FilmTile';

const FilmTiles = ({films}) =>
    <Tiles>
        {
            films.map((film, key) =>
                <FilmTile key={key} film={film}/>)
        }
    </Tiles>;

export default FilmTiles;