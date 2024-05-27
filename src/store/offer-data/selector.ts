import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Comments } from '../../types/comment';
import { State } from '../../types/state';

export const getOfferItem = (state: State): Offer | null=> state[NameSpace.Offer].offerItem;
export const getNearOffers = (state: State): Offer[] | null=> state[NameSpace.Offer].nearOffers;
export const getIsOfferDataLoading = (state: State): boolean=> state[NameSpace.Offer].isOfferDataLoading;
export const getReviews = (state: State): Comments | null => state[NameSpace.Offer].reviews;
