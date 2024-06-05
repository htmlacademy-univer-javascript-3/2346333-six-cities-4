import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchOfferAction} from './api-action';
import {NameSpace} from '../../const';
import { Offer } from '../../types/offer';
import { initialOffer } from '../../util';

export type OfferDataState = {
  isOfferDataLoading: boolean;
  offerItem: Offer | null;
  hasError: boolean;
};

const initialState: OfferDataState = {
  isOfferDataLoading: false,
  offerItem: initialOffer,
  hasError: false,
};

const updateFavorite = (state: OfferDataState, id: string) => {
  if (state.offerItem && state.offerItem.id === id) {
    state.offerItem.isFavorite = !state.offerItem.isFavorite;
  }
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState: initialState,
  reducers: {
    updateOffer: (state, action: PayloadAction<Offer>) => {
      updateFavorite(state, action.payload.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.hasError = false;
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offerItem = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.hasError = true;
        state.isOfferDataLoading = false;
      });
  },
});

export const { updateOffer } = offerData.actions;
