import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import { reducer } from './root-reducer';
import { redirect } from './redirect';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
