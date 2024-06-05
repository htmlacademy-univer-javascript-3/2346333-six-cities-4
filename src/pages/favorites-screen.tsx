import { Link } from 'react-router-dom';
import { Header } from '../components/header/header';
import { CITIES } from '../const';
import { useAppSelector } from '../hooks';
import { getFavorites, getIsFavoritesLoading } from '../store/favorite-data/selector';
import { Spinner } from './loading-screen/spinner';
import { FavoritesCard } from '../components/favorites-card';


export function FavoritesScreen(): JSX.Element {
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const favoriteOffers = useAppSelector(getFavorites);

  return isFavoritesLoading ? <Spinner /> : (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.values(CITIES).map((city) => {
                  const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city.name);
                  return (cityOffers.length !== 0) && (
                    <li className="favorites__locations-items" key={city.name}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="/">
                            <span>{city.name}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {cityOffers.map((offer) => (
                          <FavoritesCard key={offer.id} offerData={offer} />
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : (
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
