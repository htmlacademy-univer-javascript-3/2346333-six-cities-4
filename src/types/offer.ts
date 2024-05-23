import { City } from './coordinate';
import { Author, Reviews } from './review';

export type Offer = {
    id: string;
    image: string[];
    title: string;
    description: string;
    isPremium: boolean;
    type: string;
    rating: number;
    numOfBedrooms: number;
    numOfAdults: number;
    price: number;
    amenitie: string[];
    owner: Author;
    isActive: boolean;
    reviews: Reviews;
    city: City;
};

export type Offers = Offer[];
