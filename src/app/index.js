import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {
    applyMiddleware,
    createStore
} from 'redux';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const store = createStore( reducers, applyMiddleware(thunkMiddleware) );

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
