import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { favoritesData } from './favorite-data/favorite-data';
import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { appData } from './app-data/app-data';
import { reviewsData } from './review-data/review-data';
import { nearOffersData } from './near-offers-data/near-offers-data';

export const reducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.App]: appData.reducer,
  [NameSpace.Favorite]: favoritesData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.NearOffersData]: nearOffersData.reducer,
});
