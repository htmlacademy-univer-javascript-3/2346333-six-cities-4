import { useParams } from 'react-router-dom';
import { CommentForm } from '../components/comment-form';
import { ReviewList } from '../components/review-list';
import { Map } from '../components/map';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAuthCheckedStatus } from '../store/user-process/selectors';
import { Spinner } from './loading-screen/spinner';
import { Header } from '../components/header/header';
import { FavoriteButton } from '../components/favorite-button';
import { NearOffersList } from '../components/near-offer-list';
import { getIsNearbyOffersLoading, getNearbyOffers } from '../store/near-offers-data/selectors';
import { getIsReviewsLoading, getReviews } from '../store/review-data/selectors';
import { fetchOfferAction } from '../store/offer-data/api-action';
import { fetchNearbyAction } from '../store/near-offers-data/api-actions';
import { fetchReviewsAction } from '../store/review-data/api-action';
import { getIsOfferDataLoading, getOfferItem } from '../store/offer-data/selector';
import { ErrorScreen } from './error-screen/error-screen';


export function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const comments = useAppSelector(getReviews);
  const currentOffer = useAppSelector(getOfferItem);
  const nearbyList = useAppSelector(getNearbyOffers);
  const isAuthed = useAppSelector(getAuthCheckedStatus);
  const isOfferLoading = useAppSelector(getIsOfferDataLoading);
  const isReviewsLoading = useAppSelector(getIsReviewsLoading);
  const isNearbyOffersLoading = useAppSelector(getIsNearbyOffersLoading);

  const isAllLoading = isOfferLoading || isNearbyOffersLoading || isReviewsLoading;

  const nearbyOffers = nearbyList.slice(0, 3);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchNearbyAction(id));
    }
  }, [dispatch, id]);

  if (!currentOffer) {
    return <ErrorScreen />;
  }

  return isAllLoading ? <Spinner /> : (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <FavoriteButton
                  isFavorite={currentOffer.isFavorite}
                  id={currentOffer.id}
                  width="31"
                  height="33"
                  buttonClass="offer__bookmark-button"
                  activeClass="offer__bookmark-button--active"
                  iconClass="offer__bookmark-icon"
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${currentOffer.rating / 5 * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedroom{currentOffer.bedrooms === 1 || 's'}
                </li>
                <li className="offer__feature offer__feature--adults">
                Max {currentOffer.maxAdults} adult{currentOffer.maxAdults === 1 || 's'}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map(
                    (good) => (<li key={good} className="offer__inside-item">{good}</li>)
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList
                  comments={comments.slice().sort((a, b) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                  }).slice(0, 10)}
                />
                { isAuthed && <CommentForm id={id!} />}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={nearbyOffers[0].city}
              coordinates={nearbyOffers}
              selectedPoint={currentOffer}
            />
          </section>
        </section>
        <div className="container">
          <NearOffersList offers={nearbyOffers.slice(0, 3)} />
        </div>
      </main>
    </div>
  );
}
