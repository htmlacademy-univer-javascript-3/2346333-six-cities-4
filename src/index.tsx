import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { store } from './store';
import { checkAuthAction } from './store/user-process/api-action';
import { Provider } from 'react-redux';
import { fetchOffersAction } from './store/offers-data/api-action';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
