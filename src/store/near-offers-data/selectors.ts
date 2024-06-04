import { State } from '../../types/state';
import { Offers } from '../../types/offer';
import { NameSpace } from '../../const';

export const getNearbyOffers = (state: State): Offers => state[NameSpace.NearOffersData].near;
export const getIsNearbyOffersLoading = (state: State): boolean => state[NameSpace.NearOffersData].isNearOffersLoading;
