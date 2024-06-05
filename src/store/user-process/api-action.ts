import { AxiosInstance } from 'axios';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/comment';
import { AppDispatch } from '../../types/state';
import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken, saveToken } from '../../services/token';
import { fetchOffersAction } from '../offers-data/api-action';

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    `${NameSpace.User}/checkAuth`,
    async (_arg, {extra: api}) => {
      const {data} = await api.get<UserData>(APIRoute.Login);
      return data;
    },
  );


export const loginAction = createAsyncThunk<UserData, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    `${NameSpace.User}/login`,
    async ({login: email, password}, { dispatch, extra: api }) => {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      dispatch(fetchOffersAction());
      saveToken(data.token);
      return data;
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    `${NameSpace.User}/logout`,
    async (_arg, { dispatch, extra: api }) => {
      await api.delete(APIRoute.Logout);
      dispatch(fetchOffersAction());
      dropToken();
    },
  );
