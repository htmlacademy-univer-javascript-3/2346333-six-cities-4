import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../../types/state';
import { Offer } from '../../types/offer';
import {APIRoute, AppRoute, NameSpace } from '../../const';
import { redirectToRoute } from '../action';

export const fetchOfferAction = createAsyncThunk<Offer | null, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.Offer}/fetchOffer`,
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      return data;
    } catch (e) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return null;
    }
  }
);
