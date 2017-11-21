import React, { Component } from 'react';
import TopRatedHeader from './components/TopRatedHeader/TopRatedHeader';
import TopRatedStatusBar from './components/TopRatedStatusBar/TopRatedStatusBar';
import TopRatedResults from './components/TopRatedResults/TopRatedResults';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';
import Footer from '../../common/components/Footer/Footer';
import getQuery from '../../common/getQuery';

export default class TopRated extends Component {
    constructor(props) {
        super();
        this.page = +getQuery(props, 'page');
    }

    componentDidMount() {
        const loadFilms = this.props.loadFilms;
        const page = +getQuery(this.props, 'page');
        loadFilms(page || 1);
    }

    componentDidUpdate() {
        const loadFilms = this.props.loadFilms;
        const page = +getQuery(this.props, 'page');

        if (this.page === page) {
            return;
        }

        this.page = page;
        loadFilms(page || 1);
    }

    render() {
        return <PageContainer>
            <TopRatedHeader/>
            <TopRatedStatusBar totalResults={this.props.totalResults}/>
            <PageMainArea>
                <TopRatedResults
                    page={this.props.page}
                    totalPages={this.props.totalPages}
                    onSelect={this.props.selectPage}
                    films={this.props.films}/>
            </PageMainArea>
            <Footer/>
        </PageContainer>;
    }
}
