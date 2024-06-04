import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offers => state[NameSpace.Favorite].favorites;
export const getFavoritesCount = (state: State): number => state[NameSpace.Favorite].favorites.length;
export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.Favorite].isFavoritesLoading;
export const getIsFavoriteStatusSubmitting = (state: State): boolean => state[NameSpace.Favorite].isFavoriteStatusSubmitting;
