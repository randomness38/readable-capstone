import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import reducer from './reducers';

// import categories from './reducers/categories';
// import posts from './reducers/posts';
// import comments from './reducers/comments';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// index 에서 conbine reduceer 해서 보내면
// reducer  이름 안생기는 구나!
const store = createStore(
    // combineReducers({categories, posts, comments}),
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

