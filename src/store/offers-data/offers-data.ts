import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api-action';
import { Offer } from '../../types/offer';
import {SortType, NameSpace, cities} from '../../const';
import { City } from '../../types/location';

const START_CITY = cities.find((city) => city.name === 'Paris');

type OffersDataState = {
  city: City | undefined;
  offers: Offer[];
  selectedOfferId: number | null;
  isOffersDataLoading: boolean;
  sortType: SortType;
};

const initialState: OffersDataState = {
  city: START_CITY,
  offers: [] as Offer[],
  selectedOfferId: null,
  isOffersDataLoading: false,
  sortType: SortType.Popular,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSort: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<number | null>) => {
      state.selectedOfferId = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      });
  }
});

export const {changeCity, changeSort, selectOffer} = offersData.actions;
