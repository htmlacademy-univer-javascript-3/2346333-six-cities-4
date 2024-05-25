import { MainScreen } from '../pages/main-screen';
import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { LoginScreen } from '../pages/login-screen';
import { FavoritesScreen } from '../pages/favorites-screen';
import { OfferScreen } from '../pages/offer-screen';
import { NotFoundScreen } from '../pages/not-found-screen';
import { PrivateRoute } from './private-route';
import { useAppSelector } from '../hooks';
import { Spinner } from '../pages/loading-screen/spinner';


export function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
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
            path={`${AppRoute.Offer}/:offerId`}
            element={<OfferScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
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
