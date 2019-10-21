import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import * as reducers from './store/reducers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
