import { useDispatch, useSelector } from 'react-redux';
import { OfferList } from '../components/offer-list';
import { Map } from '../components/map';
import { changeCity, changeSortOption } from '../store/action';
import { State } from '../types/state';
import { CityList } from '../components/city-list';
import { SortOptions } from '../components/sort-options';
import { SortType } from '../const';
import { useMemo } from 'react';
import { sortOffers } from '../util';
import { Header } from '../components/header/header';

export function MainScreen(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector((state: State) => state.city);
  const offers = useSelector((state: State) => state.offers);
  const selectedOption = useSelector((state: State) => state.sortingOption);

  const sortedOffers = useMemo(() => sortOffers(offers, selectedOption), [offers, selectedOption]);
  const coordinates = offers.map((point) => point.city);
  const offerCount = offers.length;

  const handleSortChange = (newSortType: SortType) => {
    dispatch(changeSortOption(newSortType));
  };

  return (
    <div className="page page--gray page--main">
      <Header/>

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
              <b className="places__found">{offerCount} places to stay in {city.name}</b>
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
