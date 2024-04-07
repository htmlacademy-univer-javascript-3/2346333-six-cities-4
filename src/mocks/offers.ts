import { Offers } from '../types/offer';
import { reviews } from './reviews';

export const offers: Offers = [
  {
    id: 1,
    imagePath: 'img/apartment-01.jpg',
    cardName: 'Beautiful &amp; luxurious apartment at great location',
    cardType: 'Apartment',
    rating:4.6,
    price: 120,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    isPremium: true,
    isActive: false,
    reviews: [reviews[0]],
  },
  {
    id: 2,
    imagePath: 'img/room.jpg',
    cardName: 'Wood and stone place',
    cardType: 'Room',
    rating:5,
    price: 80,
    description: 'As the title says it is a house. I hope I don\' need to explain more... Do whatever with it.',
    isPremium: false,
    isActive: true,
    reviews: [reviews[1]],
  },
  {
    id: 3,
    imagePath: 'img/apartment-02.jpg',
    cardName: 'Canal View Prinsengracht',
    cardType: 'Apartment',
    rating:2.7,
    price: 132,
    description: 'An incredibly compact habitat for anything you might want! Only the best space-saving techniques are used such as a sofa that transforms into your bed and others!.',
    isPremium: false,
    isActive: false,
    reviews: [reviews[2]],
  },
  {
    id: 4,
    imagePath: 'img/apartment-03.jpg',
    cardName: 'Nice, cozy, warm big bed apartment',
    cardType: 'Apartment',
    rating:4.2,
    price: 180,
    description: 'Gretest... Well, you get it.',
    isPremium: true,
    isActive: false,
    reviews: [reviews[0]],
  },
];
