import React from 'react';
import Header from '../../../../common/components/Header/Header';
import PageTitle from '../../../../common/components/PageTitle/PageTitle';
import FilmInfo from '../FilmInfo/FilmInfo';

function renderInfo(film) {
    if (!film.id) {
        return;
    }
    return <FilmInfo film={film}/>;
}

const FilmHeader = ({film}) => {
    return <Header>
        <PageTitle/>
        { renderInfo(film) }
    </Header>;
};

export default FilmHeader;
