import { AxiosInstance } from 'axios';
import { Offers } from '../../types/offer';
import { AppDispatch } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';

export const fetchNearbyAction = createAsyncThunk<Offers, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.NearOffersData}/fetchNearby`,
  async (id, { extra: api }) => {
    const { data } = await api.get<Offers>(
      `${APIRoute.Offers}/${id}${APIRoute.Nearby}`
    );
    return data;
  });
