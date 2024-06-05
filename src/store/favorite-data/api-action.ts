import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { Offer, Offers } from '../../types/offer';
import { APIRoute, NameSpace } from '../../const';
import { updateOffer } from '../offer-data/offer-data';
import { updateMultipleNearby } from '../near-offers-data/near-offers-data';
import { updateMultipleFavorites } from './favorite-data';
import { updateMultipleOffers } from '../offers-data/offers-data';

export type FavoritePayload = {
  id: string;
  status: number;
};

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${NameSpace.Favorite}/fetchFavorites`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    return data;
  }
);


export const changeFavoriteStatusAction = createAsyncThunk<Offer, FavoritePayload, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Favorite}/changeFavoriteStatus`,
  async ({ status, id }, { rejectWithValue, extra: api, dispatch }) => {
    try {
      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status ? 0 : 1}`);
      dispatch(updateMultipleOffers(data));
      dispatch(updateOffer(data));
      dispatch(updateMultipleFavorites(data));
      dispatch(updateMultipleNearby(data));
      return data;
    } catch (e) {
      return rejectWithValue(e as Error);
    }
  }
);

