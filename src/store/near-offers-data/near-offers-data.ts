import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNearbyAction } from './api-actions';

type NearbyOffersData = {
    near: Offers;
    isNearOffersLoading: boolean;
    hasError: boolean;
  };

const initialNearbyData: NearbyOffersData = {
  near: [],
  isNearOffersLoading: false,
  hasError: false,
};

export const updateFavorites = (nearby: Offer[], updatedOffer: Offer) => {
  const offerNearbyIndex = nearby.findIndex((element) => element.id === updatedOffer.id);
  if (offerNearbyIndex !== -1) {
    nearby[offerNearbyIndex].isFavorite = !nearby[offerNearbyIndex].isFavorite;
  }
};

export const nearOffersData = createSlice({
  name: NameSpace.NearOffersData,
  initialState: initialNearbyData,
  reducers: {
    updateMultipleNearby: (state, action: PayloadAction<Offer>) => {
      updateFavorites(state.near, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyAction.pending, (state) => {
        state.hasError = false;
        state.isNearOffersLoading = true;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.hasError = false;
        state.near = action.payload;
        state.isNearOffersLoading = false;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.hasError = true;
        state.isNearOffersLoading = false;
      });
  },
});

export const { updateMultipleNearby } = nearOffersData.actions;
