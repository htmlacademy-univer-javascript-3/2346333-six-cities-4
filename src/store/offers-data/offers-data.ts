import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-action';
import { Offer, Offers } from '../../types/offer';
import {NameSpace} from '../../const';

export type OffersDataState = {
    offers: Offers;
    isOffersDataLoading: boolean;
    hasError: boolean;
};

const initialState: OffersDataState = {
  offers: [] as Offers,
  isOffersDataLoading: false,
  hasError: false,
};

export const updateOffers = (offers: Offer[], updatedOffer: Offer) => {
  const offerIndex = offers.findIndex((element) => element.id === updatedOffer.id);
  if (offerIndex !== -1) {
    offers[offerIndex] = updatedOffer;
  }
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateMultipleOffers: (state, action: PayloadAction<Offer>) => {
      updateOffers(state.offers, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.hasError = false;
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.hasError = true;
        state.isOffersDataLoading = false;
      });
  },
});

export const { updateMultipleOffers } = offersData.actions;
