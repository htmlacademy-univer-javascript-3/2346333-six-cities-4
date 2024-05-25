import {createReducer} from '@reduxjs/toolkit';
import { changeCity, changeSortOption, loadOfferList, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus, SortType } from '../const';
import { City } from '../types/coordinate';
import { Offers } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offers;
  sortingOption: SortType;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
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
    });
});
