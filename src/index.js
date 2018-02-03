import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

// ReactDOM.render(
//     <Root store={store} />
//     , document.getElementById('root')
// );
