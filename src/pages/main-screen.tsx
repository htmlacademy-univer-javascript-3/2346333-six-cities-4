import { useState } from 'react';
import { OfferList } from '../components/offer-list';
import { Map } from '../components/map';
import { Header } from '../components/header/header';
import { useAppSelector } from '../hooks';
import { getIsOffersDataLoading, getOffers } from '../store/offers-data/selector';
import { CityList } from '../components/city-list';
import { SortOptions } from '../components/sort-options';
import { sortOffers } from '../util';
import { Offer } from '../types/offer';
import { getSelectedCity, getSelectedSortType } from '../store/app-data/selectors';
import { Spinner } from './loading-screen/spinner';


export function MainScreen(): JSX.Element {
  const city = useAppSelector(getSelectedCity);
  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const offers = useAppSelector(getOffers);

  const currentOffers = offers.filter((offer) => offer.city.name === city?.name);
  const selectedOption = useAppSelector(getSelectedSortType);
  const sortedOffers = sortOffers(currentOffers, selectedOption);
  const [hoveredOffer, setHoveredOffer] = useState<Offer | undefined>(undefined);

  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {currentOffers.length ? (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {city.name}</b>
                <SortOptions />
                <OfferList offers={sortedOffers} onMouseOver={setHoveredOffer} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} coordinates={sortedOffers} selectedPoint={hoveredOffer} />
                </section>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {city?.name}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      )}
    </div>
  );
}
