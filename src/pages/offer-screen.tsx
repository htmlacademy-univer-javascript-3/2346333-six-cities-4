import { State } from '../types/state';
import { useSelector } from 'react-redux';
import { AppRoute } from '../const';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CommentForm } from '../components/comment-form';
import { ReviewList } from '../components/review-list';
import { Map } from '../components/map';


export function OfferScreen(): JSX.Element {

  const { offerId } = useParams();
  const numId = String(offerId).replace(/[^0-9]/g, '');
  const offers = useSelector((state: State) => state.offers);
  const selectedOffer = offers.find((offer) => offer.id === numId);

  return (
    <div className="page">
      {selectedOffer ? (
        <>
          <Helmet>
            <title>6 городов</title>
          </Helmet>
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link to={AppRoute.Root}>
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                  </Link>
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
          <main className="page__main page__main--offer">
            <section className="offer">
              <div className="offer__gallery-container container">
                <div className="offer__gallery">
                  {selectedOffer.images.map((image, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} className="offer__image-wrapper">
                      <img className="offer__image" src={image} alt={selectedOffer.type} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="offer__container container">
                <div className="offer__wrapper">
                  <div className="offer__mark">
                    <span>{selectedOffer.isPremium ? 'Premium' : 'Not premium'}</span>
                  </div>
                  <div className="offer__name-wrapper">
                    <h1 className="offer__name">
                      {selectedOffer.title}
                    </h1>
                    <button className="offer__bookmark-button button" type="button">
                      <svg className="offer__bookmark-icon" width={31} height={33}>
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="offer__rating rating">
                    <div className="offer__stars rating__stars">
                      <span style={{width: '80%'}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
                  </div>
                  <ul className="offer__features">
                    <li className="offer__feature offer__feature--entire">
                      {selectedOffer.type}
                    </li>
                    <li className="offer__feature offer__feature--bedrooms">
              3 Bedrooms
                    </li>
                    <li className="offer__feature offer__feature--adults">
              Max 4 adults
                    </li>
                  </ul>
                  <div className="offer__price">
                    <b className="offer__price-value">€{selectedOffer.price}</b>
                    <span className="offer__price-text">&nbsp;night</span>
                  </div>
                  <div className="offer__inside">
                    <h2 className="offer__inside-title">What&apos;s inside</h2>
                    <ul className="offer__inside-list">
                      {selectedOffer.goods.map((thing, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={index} className="offer__inside-item">
                          {thing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="offer__host">
                    <h2 className="offer__host-title">Meet the host</h2>
                    <div className="offer__host-user user">
                      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="offer__avatar user__avatar" src={selectedOffer.host.avatarUrl} width={74} height={74} alt={selectedOffer.host.avatarUrl} />
                      </div>
                      <span className="offer__user-name">
                        {selectedOffer.host.name}
                      </span>
                      <span className="offer__user-status">
                Pro
                      </span>
                    </div>
                    <div className="offer__description">
                      <p className="offer__text">
                        {selectedOffer.description}
                      </p>
                    </div>
                  </div>
                  <section className="offer__reviews reviews">
                    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{selectedOffer.reviews.length}</span></h2>
                    <ReviewList offer={selectedOffer} />
                    <CommentForm/>
                  </section>
                </div>
              </div>
              <section className="offer__map map">
                <Map city={selectedOffer.city} coordinates={[selectedOffer.city]} selectedPoint={selectedOffer.city}/>
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src="img/room.jpg" width={260} height={200} alt="Place image" />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€80</b>
                          <span className="place-card__price-text">/&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                          <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: '80%'}} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">{selectedOffer.title}</a>
                      </h2>
                      <p className="place-card__type">{selectedOffer.type}</p>
                    </div>
                  </article>
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src="img/apartment-02.jpg" width={260} height={200} alt="Place image" />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€132</b>
                          <span className="place-card__price-text">/&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button button" type="button">
                          <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: '80%'}} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Canal View Prinsengracht</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                  <article className="near-places__card place-card">
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img className="place-card__image" src="img/apartment-03.jpg" width={260} height={200} alt="Place image" />
                      </a>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">€180</b>
                          <span className="place-card__price-text">/&nbsp;night</span>
                        </div>
                        <button className="place-card__bookmark-button button" type="button">
                          <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark" />
                          </svg>
                          <span className="visually-hidden">To bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{width: '100%'}} />
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">Nice, cozy, warm big bed apartment</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </>
      ) : (
        <p>Offer not found</p>
      )}
    </div>
  );
}
