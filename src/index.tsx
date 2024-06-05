import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { store } from './store';
import { checkAuthAction } from './store/user-process/api-action';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchOffersAction } from './store/offers-data/api-action';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
