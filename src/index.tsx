import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { store } from './store';
import { checkAuthAction } from './store/user-process/api-action';
import { Provider } from 'react-redux';
import { ErrorMessage } from './components/error-message/error-message';
import { fetchOffersAction } from './store/offers-data/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
