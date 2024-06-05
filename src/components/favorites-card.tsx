import { Offer } from '../types/offer';
import { Link } from 'react-router-dom';
import { FavoriteButton } from './favorite-button';

type FavoriteCardProps = {
  offerData: Offer;
};

export function FavoritesCard({offerData}: FavoriteCardProps): JSX.Element {

  return (
    <article className="favorites__card place-card">
      {offerData.isPremium && <div className="place-card__mark"> <span>Premium</span> </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offerData.id}`}>
          <img className="place-card__image" src={offerData.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            isFavorite={offerData.isFavorite}
            id={offerData.id}
            width="18"
            height="19"
            buttonClass="place-card__bookmark-button"
            activeClass="place-card__bookmark-button--active"
            iconClass="place-card__bookmark-icon"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offerData.rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offerData.id}`}>{offerData.title}</Link>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}
