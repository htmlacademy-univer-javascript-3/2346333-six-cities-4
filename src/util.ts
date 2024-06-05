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

export const formatRating = (rate: number) => `${(rate / 5) * 100}%`;

export function getRandomArrayElement<T>(array: T[]) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

export const initialOffer: Offer = {
  id: '',
  title: '',
  type: '',
  price: 0,
  city: {
    name: '',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  isFavorite: false,
  isPremium: false,
  rating: 0,
  previewImage: '',
  description: '',
  bedrooms: 0,
  maxAdults: 0,
  goods: [],
  host: {
    id: 0,
    name: '',
    isPro: false,
    avatarUrl: '',
  },
  images: [],
};
