import React, { Component } from 'react';
import FilmHeader from './components/FilmHeader/FilmHeader';
import FilmStatusBar from './components/FilmStatusBar/FilmStatusBar';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';
import RecommendedFilms from './components/RecommendedFilms/RecommendedFilms';

class Film extends Component {
    constructor(props) {
        super();
        this.id = props.match.params.id;
    }

    componentDidMount() {
        const {
            loadFilm,
            loadRecommendations,
            match
        } = this.props;

        loadFilm(match.params.id);
        loadRecommendations(match.params.id);
    }

    componentDidUpdate() {
        const {
            loadFilm,
            loadRecommendations,
            match
        } = this.props;

        if (this.id === match.params.id) {
            return;
        }

        this.id = match.params.id;
        loadFilm(match.params.id);
        loadRecommendations(match.params.id);
    }

    render() {
        return <PageContainer>
            <FilmHeader film={this.props.film}/>
            <FilmStatusBar
                sortValues={this.props.sortValues}
                activeSortValue={this.props.activeSortValue}
                onSortValueChange={this.props.onSortValueChange}/>
            <PageMainArea>
                <RecommendedFilms
                    recommendations={this.props.sortFilms(this.props.recommendations, this.props.activeSortValue)}/>
            </PageMainArea>
        </PageContainer>;
    }
}

export default Film;