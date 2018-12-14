import React from 'react';
import { render } from 'react-dom';
import Index from '@app/index';
import { Provider } from 'react-redux';
import { store, history } from '@app/redux/store';

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
