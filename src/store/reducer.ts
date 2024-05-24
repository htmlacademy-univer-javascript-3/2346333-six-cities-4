import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, changeSortOption, fillOfferList } from './action';
import { city } from '../mocks/city';
import { SortType } from '../const';


const initialState = {
  city: city,
  offers: offers,
  sortingOption: SortType.Start,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.sortingOption = action.payload;
    });
});
