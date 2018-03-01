import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import App from './components/app';
import Thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'));
