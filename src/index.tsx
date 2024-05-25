import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './services/api-actions';
import { Provider } from 'react-redux';
import { ErrorMessage } from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

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
