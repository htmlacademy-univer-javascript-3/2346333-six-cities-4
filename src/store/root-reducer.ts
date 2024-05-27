import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { AppData } from './app-data/app-data';
import { FavoriteData } from './favorite-data/favorite-data';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.App]: AppData.reducer,
  [NameSpace.Favorite]: FavoriteData.reducer,
});
