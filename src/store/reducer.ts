import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillOfferList } from './action';
import { city } from '../mocks/city';


const initialState = {
  city: city,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOfferList, (state, action) => {
      state.offers = action.payload;
    });
});
