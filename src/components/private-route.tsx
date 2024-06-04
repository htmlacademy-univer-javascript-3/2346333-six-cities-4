import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';


type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
