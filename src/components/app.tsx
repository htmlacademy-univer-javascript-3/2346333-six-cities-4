import { MainScreen } from '../pages/main-screen';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { LoginScreen } from '../pages/login-screen';
import { FavoritesScreen } from '../pages/favorites-screen';
import { OfferScreen } from '../pages/offer-screen';
import { NotFoundScreen } from '../pages/not-found-screen';
import { PrivateRoute } from './private-route';
import { Offers } from '../types/offer';
import React from 'react';
import { City, Coordinates } from '../types/coordinate';


type AppScreenProps = {
  offerCount: number;
  offers: Offers;
  city: City;
  coordinates: Coordinates;
}

export function App({offerCount, offers, city, coordinates}: AppScreenProps): JSX.Element {
  const [choosenOffer] = React.useState(offers[0]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen offerCount={offerCount} offers={offers} city={city} coordinates={coordinates}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesScreen offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferScreen offer={choosenOffer}/>}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
