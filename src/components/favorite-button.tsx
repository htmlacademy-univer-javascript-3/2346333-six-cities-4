import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { AppRoute } from '../const';
import { MouseEvent } from 'react';
import { getIsFavoriteStatusSubmitting } from '../store/favorite-data/selector';
import { getAuthCheckedStatus } from '../store/user-process/selectors';
import { changeFavoriteStatusAction } from '../store/favorite-data/api-action';

type FavoriteButtonProps = {
  isFavorite: boolean;
  id: string;
  width: string;
  height: string;
  buttonClass: string;
  activeClass: string;
  iconClass: string;
};

export function FavoriteButton({ isFavorite, id, width, height, buttonClass, activeClass, iconClass }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthCheckedStatus);
  const disabledBookmarkButton = useAppSelector(getIsFavoriteStatusSubmitting);

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(
      changeFavoriteStatusAction({
        id: id,
        status: Number(isFavorite),
      })
    );
  };

  return (
    <button
      className={`bookmark-button button ${buttonClass} ${isFavorite ? activeClass : ''}`}
      type="button"
      disabled={disabledBookmarkButton}
      onClick={handleClick}
    >
      <svg
        className={`bookmark-icon ${iconClass}`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
