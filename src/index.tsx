import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { Setting } from './const';
import { offers } from './mocks/offers';
import { city } from './mocks/city';
import { coordinates } from './mocks/coordinates';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offerCount={Setting.offerCount}
      offers={offers}
      city={city}
      coordinates={coordinates}
    />
  </React.StrictMode>
);
