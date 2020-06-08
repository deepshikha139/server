import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// reducer, initial state, middleWare
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// provider will update all theApp components about updation in store
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
