/* eslint-disable no-nested-ternary */
import { SortType } from './const';
import { Offer } from './types/offer';

export function sortOffers(offers: Offer[], sortType: SortType): Offer[] {
  return [...offers].sort((a, b) => sortType === SortType.PriceHighToLow
    ? b.price - a.price
    : sortType === SortType.PriceLowToHigh
      ? a.price - b.price
      : sortType === SortType.Rating
        ? b.rating - a.rating
        : 0);
}
