import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/user-process/api-action';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export function Header(): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="#">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                {authorizationStatus === AuthorizationStatus.NoAuth ? (
                  <a className="header__nav-link" href="/login">
                    <span className="header__signin">Sign in</span>
                  </a>
                ) : (
                  <a className="header__nav-link" href="#" onClick={handleSignOutClick}>
                    <span className="header__signout">Sign out</span>
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
