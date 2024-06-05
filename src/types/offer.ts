import { City, Location } from './location';

export type Host = {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
  }

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    description: string;
    bedrooms: number;
    maxAdults: number;
    goods: string[];
    host: Host;
    images: string[];
};

export type Offers = Offer[];
