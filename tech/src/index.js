import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js';
import reducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


const store = createStore(
    reducer, 
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));
