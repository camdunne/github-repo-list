import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';
import AppContainer from './App/AppContainer';
import './index.css';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState({
    ...store.getState()
  });
});

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
