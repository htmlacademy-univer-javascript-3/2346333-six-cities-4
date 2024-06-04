import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';

export const getOfferItem = (state: State): Offer | null => state[NameSpace.Offer].offerItem;
export const getIsOfferDataLoading = (state: State): boolean=> state[NameSpace.Offer].isOfferDataLoading;
