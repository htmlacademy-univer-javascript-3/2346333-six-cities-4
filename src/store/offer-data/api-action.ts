import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import { Offer } from '../../types/offer';
import {APIRoute } from '../../const';
import { CommentData, Comments } from '../../types/comment';

export const fetchOfferItemAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferItem',
  async (offerId, {extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      return data;
    } catch {
      //dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    }
  }
);

export const fetchNearOffersAction = createAsyncThunk<Offer[], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

export const fetchReviewAction = createAsyncThunk<Comments, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewAction',
  async (offerId, {extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${offerId}`);
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);

export const sendReviewAction = createAsyncThunk<Comments, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReviewAction',
  async ({id, rating, comment}, {extra: api}) => {
    try {
      const {data} = await api.post<Comments>(`${APIRoute.Comments}/${id}`, {rating, comment});
      return data;
    } catch (error) {
      throw new Error();
    }
  }
);
