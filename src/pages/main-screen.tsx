import { useDispatch } from 'react-redux';
import { OfferList } from '../components/offer-list';
import { Map } from '../components/map';
import { changeCity, changeSortOption } from '../store/action';
import { CityList } from '../components/city-list';
import { SortOptions } from '../components/sort-options';
import { SortType } from '../const';
import { Header } from '../components/header/header';
import { getCity, getOffers } from '../store/favorite-data/selector';
import { useAppSelector } from '../hooks';

export function MainScreen(): JSX.Element {
  const dispatch = useDispatch();
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);

  // Получение координат из предложений
  const coordinates = offers.map((point) => point.city);
  const offerCount = offers.length;

  const handleSortChange = (newSortType: SortType) => {
    dispatch(changeSortOption(newSortType));
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        {city && (
          <div className="tabs">
            <section className="locations container">
              <CityList selectedCity={city} changeCity={(newCity) => dispatch(changeCity(newCity))} />
            </section>
          </div>
        )}
        {city && (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offerCount} places to stay in {city.name}</b>
                <SortOptions sortType={SortType.Popular} onChangeSort={handleSortChange} />
                <OfferList offers={offers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} coordinates={coordinates} selectedPoint={undefined} />
                </section>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
