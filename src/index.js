import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {GlobalReducer} from './reducers/index'
import thunk from 'redux-thunk';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={createStore(GlobalReducer,composeWithDevTools(applyMiddleware(thunk)))}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
