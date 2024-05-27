import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getOffers = (state: State) => state[NameSpace.Offers].offers;
export const getCity = (state: State) => state[NameSpace.Offers].city;
export const getIsOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;
export const getSelectedOfferId = (state: State): number | null => state[NameSpace.Offers].selectedOfferId;
