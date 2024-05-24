import { useDispatch, useSelector } from 'react-redux';
import { OfferList } from '../components/offer-list';
import { Map } from '../components/map';
import { changeCity, changeSortOption } from '../store/action';
import { RootState } from '../store';
import { CityList } from '../components/city-list';
import { SortOptions } from '../components/sort-options';
import { SortType } from '../const';
import { useMemo } from 'react';
import { sortOffers } from '../util';

export function MainScreen(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city);
  const offers = useSelector((state: RootState) => state.offers);
  const selectedOption = useSelector((state: RootState) => state.sortingOption);

  const sortedOffers = useMemo(() => sortOffers(offers, selectedOption), [offers, selectedOption]);
  const coordinates = offers.map((point) => point.city);
  const offerCount = offers.length;

  const handleSortChange = (newSortType: SortType) => {
    dispatch(changeSortOption(newSortType));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList selectedCity={city} changeCity={(newCity) => dispatch(changeCity(newCity))} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {city.title}</b>
              <SortOptions sortType={selectedOption} onChangeSort={handleSortChange}/>
              <OfferList offers={sortedOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} coordinates={coordinates} selectedPoint={undefined} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
