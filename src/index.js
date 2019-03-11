import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import reducer from './store/reducer'
import addPersonReducer from '../src/store/reducers/addPerson'
import byDateReducer from '../src/store/reducers/byDate'

const reducers = combineReducers({
    addPer: addPersonReducer,
    byD: byDateReducer
})

const store = createStore(reducers)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
