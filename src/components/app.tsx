import { MainScreen } from '../pages/main-screen';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { LoginScreen } from '../pages/login-screen';
import { FavoritesScreen } from '../pages/favorites-screen';
import { OfferScreen } from '../pages/offer-screen';
import { NotFoundScreen } from '../pages/not-found-screen';
import { PrivateRoute } from './private-route';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../store/user-process/selectors';
import { useEffect } from 'react';
import { Spinner } from '../pages/loading-screen/spinner';
import { getIsOffersDataLoading } from '../store/offers-data/selector';
import { fetchFavoritesAction } from '../store/favorite-data/api-action';
import { HistoryRouter } from './history-router';
import { browserHistory } from '../browser-history';

export function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsOffersDataLoading);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchFavoritesAction);
    }
  }, [dispatch, isAuthChecked]);


  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
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
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}
