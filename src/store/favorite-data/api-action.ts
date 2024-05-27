import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../../types/state';
import { Offer } from '../../types/offer';
import {APIRoute} from '../../const';

type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type FavoritePayload = {
  id: number;
  status: number;
};

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, ThunkOptions
>('data/fetchFavorites', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Favorite);

    return data;
  } catch (error) {
    throw new Error();
  }
});

export const setFavoritesAction = createAsyncThunk<Offer, FavoritePayload, ThunkOptions
>(
  'favorite/setFavorite',
  async({id, status}, {extra: api}) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);
