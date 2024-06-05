import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { changeFavoriteStatusAction, fetchFavoritesAction } from './api-action';
import { Offer, Offers } from '../../types/offer';

export type FavoritesData = {
  favorites: Offers;
  isFavoritesLoading: boolean;
  isFavoriteStatusSubmitting: boolean;
  hasError: boolean;
};

const initialState: FavoritesData = {
  favorites: [],
  isFavoritesLoading: false,
  isFavoriteStatusSubmitting: false,
  hasError: false,
};

export const updateFavorites = (favorites: Offer[], updatedOffer: Offer) => {
  const favoriteOfferIndex = favorites.findIndex(
    (element) => element.id === updatedOffer.id
  );

  if (updatedOffer.isFavorite && favoriteOfferIndex === -1) {
    favorites.push(updatedOffer);
  } else if (!updatedOffer.isFavorite && favoriteOfferIndex !== -1) {
    favorites.splice(favoriteOfferIndex, 1);
  }
};


export const favoritesData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    updateMultipleFavorites: (state, action: PayloadAction<Offer>) => {
      updateFavorites(state.favorites, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.hasError = false;
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.hasError = true;
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.isFavoriteStatusSubmitting = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state) => {
        state.isFavoriteStatusSubmitting = false;
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.isFavoriteStatusSubmitting = false;
      });
  },
});

export const { updateMultipleFavorites } = favoritesData.actions;
