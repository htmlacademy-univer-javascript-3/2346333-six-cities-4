import { Reviews } from './review';

export type Offer = {
    id: number;
    imagePath: string;
    cardName: string;
    cardType: string;
    rating: number;
    price: number;
    description: string;
    isPremium: boolean;
    isActive: boolean;
    reviews: Reviews;
};

export type Offers = Offer[];
