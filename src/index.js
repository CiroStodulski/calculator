import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './containers/Cauculadora';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import multi from 'redux-multi';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(multi,thunkMiddleware));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>Calculadora</h1>
            <Calculator />
        </div>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
