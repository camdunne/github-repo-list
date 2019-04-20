import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import AppContainer from './App/AppContainer';
import './index.css';


const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
