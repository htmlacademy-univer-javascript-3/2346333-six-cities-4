import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/location';
import { Offer, Offers } from '../types/offer';
import { SortType } from '../const';
import { AuthorizationStatus } from '../const';
import { Comments } from '../types/comment';

export const changeCity = createAction<City>('changeCity');
export const loadOfferList = createAction<Offers>('loadOfferList');
export const getOfferById = createAction<Offer>('getOfferById');
export const changeSortOption = createAction<SortType>('changeSortOption');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const loadComments = createAction<Comments>('loadComments');
export const loadNearbyOffers = createAction<Offers>('loadNearbyOffers');
