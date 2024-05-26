import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortOption, getOfferById, loadComments, loadNearbyOffers, loadOfferList, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus, SortType } from '../const';
import { City } from '../types/location';
import { Offer, Offers } from '../types/offer';
import { Comments } from '../types/comment';

type InitialState = {
  city: City;
  offers: Offers;
  currentOffer?: Offer;
  nearOffers: Offers;
  comments: Comments;
  sortingOption: SortType; //?
  authorizationStatus: AuthorizationStatus;
  error: string | null; //
  isOffersDataLoading: boolean;
  //email, favourites offers
}

const initialState: InitialState = {
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    }},
  offers: [],
  nearOffers: [],
  comments: [],
  sortingOption: SortType.Start,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOfferList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(getOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearOffers = action.payload;
    });
});
