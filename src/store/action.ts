import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/coordinate';
import { Offers } from '../types/offer';
import { SortType } from '../const';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<City>('changeCity');
export const loadOfferList = createAction<Offers>('loadOfferList');
export const changeSortOption = createAction<SortType>('changeSortOption');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
