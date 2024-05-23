import { Offer } from '../types/offer';

type ReviewProps = {
    offer: Offer;
  }

export function ReviewList({offer}: ReviewProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {offer.reviews.map((review) => (
        <li className="reviews__item" key={offer.id + review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.avatar.src} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.author}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: '80%'}} />
                <span className="visually-hidden">{review.rating}</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.description}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
          </div>
        </li>))}
    </ul>);
}
