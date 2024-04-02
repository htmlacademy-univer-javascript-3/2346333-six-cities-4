import { MainScreen } from '../pages/main-screen';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { LoginScreen } from '../pages/login-screen';
import { FavoritesScreen } from '../pages/favorites-screen';
import { OfferScreen } from '../pages/offer-screen';
import { NotFoundScreen } from '../pages/not-found-screen';
import { PrivateRoute } from './private-route';

type AppScreenProps = {
  offerCount: number;
}

export function App({offerCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen offerCount={offerCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
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
