import { AxiosInstance } from 'axios';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/comment';
import { AppDispatch } from '../../types/state';
import { State } from '../../types/state';
import { APIRoute } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dropToken, saveToken } from '../../services/token';

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/checkAuth',
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
    'user/login',
    async ({login: email, password}, {extra: api}) => {
      try {
        const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(data.token);
        return data;
      } catch {
        throw new Error();
      }
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/logout',
    async (_arg, {extra: api}) => {
      try {
        await api.delete(APIRoute.Logout);
        dropToken();
      } catch {
        throw new Error();
      }
    },
  );
