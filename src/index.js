import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './reducers';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer,applyMiddleware(thunk,logger))

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <>
      <App />
    </>
  </BrowserRouter>
  </Provider>
);
