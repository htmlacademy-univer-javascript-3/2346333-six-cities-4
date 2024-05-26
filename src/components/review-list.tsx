import { Comments } from '../types/comment';

type ReviewListProps = {
  comments: Comments;
};

export function ReviewList({ comments }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: `${review.rating * 20}%` }} />
                <span className="visually-hidden">{review.rating}</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={review.date}>{new Date(review.date).toLocaleDateString()}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}
