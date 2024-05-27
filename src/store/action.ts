import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortType } from '../const';
import { City } from '../types/location';
import { Offer, Offers } from '../types/offer';
import { Comments, UserData } from '../types/comment';

export const changeCity = createAction('city/changeCity',(city: City) => ({payload: city}));
export const updateOfferList = createAction('offer/updateOfferList');
export const selectOffer = createAction('offer/selectOffer',(offerId: number | null) => ({payload: offerId}));
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOfferItem = createAction('data/loadOfferItem',(offerItem: Offer) => ({payload: offerItem}));
export const loadNearOffers = createAction('data/loadNearOffers',(nearestOffers: Offer[]) => ({payload: nearestOffers}));
export const loadReviews = createAction('data/loadReviews',(reviews: Comments) => ({payload: reviews}));
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setError = createAction<string | null>('data/setError');
export const changeSort = createAction('sort/changeSort',(sort: SortType) => ({payload: sort}));
export const loadUserData = createAction('user/loadUserData',(userData: UserData) => ({payload: userData}));
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
