import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { createStore,applyMiddleware,compose } from 'redux';
import combineReducers from './reducers'
 
const store = createStore(combineReducers , compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>
);

