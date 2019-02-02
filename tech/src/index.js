import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducers'

import thunk from 'redux-thunk';
import logger from 'redux-thunk';


import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

const store = createStore(
    reducer, 
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
