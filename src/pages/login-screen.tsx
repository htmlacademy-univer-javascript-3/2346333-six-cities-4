import { FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginAction } from '../store/user-process/api-action';
import { AppRoute, CITIES} from '../const';
import { HeaderLogo } from '../components/header/header-logo';
import { getIsSubmittingLogin } from '../store/user-process/selectors';
import { changeCity } from '../store/app-data/app-data';
import { getRandomArrayElement } from '../util';
import { City } from '../types/location';

export function LoginScreen(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isSubmittingLogin = useAppSelector(getIsSubmittingLogin);

  const randomCity = getRandomArrayElement(Object.keys(CITIES));
  const randomCityDetails: City = CITIES[randomCity];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const password = passwordRef.current.value;
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;

      if (!passwordPattern.test(password)) {
        setError('Password must contain at least one letter and one number.');
        return;
      }

      setError('');
      dispatch(loginAction({
        login: loginRef.current.value,
        password: password
      }));
      navigate(AppRoute.Root);
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <HeaderLogo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} disabled={isSubmittingLogin} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef}/>
                {error && <div className="error-message">{error}</div>}
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" >
              <Link className="locations__item-link" to="/" >
                <span onClick={ () => dispatch(changeCity(randomCityDetails)) }>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
