import React from 'react';
import Footer from './common/components/Footer/Footer';
import {
    AppContainer,
    Container
} from './common/styles/Container.styles';
import { Route, Switch } from 'react-router';
import Film from './pages/Film/FilmContainer';
import TopRated from './pages/TopRated/TopRatedContainer';
import NotFound from './pages/NotFound/NotFound';

export const App = ({children}) =>
    <AppContainer>
        <Container>
            <Switch>
                <Route exact path='/' component={TopRated}/>
                <Route exact path='/film/:id' component={Film}/>
                <Route component={NotFound}/>
            </Switch>
        </Container>
    </AppContainer>;

export default App;
