import { MainScreen } from '../pages/main-screen';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import {Provider} from 'react-redux';
import { LoginScreen } from '../pages/login-screen';
import { FavoritesScreen } from '../pages/favorites-screen';
import { OfferScreen } from '../pages/offer-screen';
import { NotFoundScreen } from '../pages/not-found-screen';
import { PrivateRoute } from './private-route';
import { Offers } from '../types/offer';
import { store } from '../store';


type AppScreenProps = {
  offers: Offers;
}

export function App({offers}: AppScreenProps): JSX.Element {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path={AppRoute.Root}
              element={<MainScreen />}
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
              element={<OfferScreen offers={offers}/>}
            />
            <Route
              path="*"
              element={<NotFoundScreen />}
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
