import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './AppContainer';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    div
  );
  unmountComponentAtNode(div);
});

it('App matches snapshot', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});