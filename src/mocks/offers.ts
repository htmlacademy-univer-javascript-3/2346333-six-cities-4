import { Offers } from '../types/offer';
import { city, city2 } from './city';
import { reviews } from './reviews';

export const offers: Offers = [
  {
    id: '1',
    image: ['img/apartment-01.jpg'],
    title: 'Beautiful &amp; luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of city. The building is green and from 18th century.',
    isPremium: true,
    type: 'Apartment',
    rating: 4.6,
    numOfBedrooms: 5,
    numOfAdults: 4,
    price: 120,
    amenitie: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isActive: false,
    reviews: [reviews[0]],
    city: city,
    owner: {
      id: 0,
      author: '',
      avatar: {
        src: '',
        alt: ''
      },
      rating: 0,
      date: '',
      description: ''
    }
  },
  {
    id: '2',
    image: ['img/room.jpg'],
    title: 'Wood and stone place',
    description: 'As the title says it is a house. I hope I don\' need to explain more... Do whatever with it.',
    isPremium: false,
    type: 'Room',
    rating: 5,
    numOfBedrooms: 5,
    numOfAdults: 4,
    price: 80,
    amenitie: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isActive: true,
    reviews: [reviews[1]],
    city: city2,
    owner: {
      id: 0,
      author: '',
      avatar: {
        src: '',
        alt: ''
      },
      rating: 0,
      date: '',
      description: ''
    }
  },
  {
    id: '3',
    image: ['img/apartment-02.jpg'],
    title: 'Canal View Prinsengracht',
    description: 'An incredibly compact habitat for anything you might want! Only the best space-saving techniques are used such as a sofa that transforms into your bed and others!.',
    isPremium: false,
    type: 'Apartment',
    rating: 5,
    numOfBedrooms: 5,
    numOfAdults: 4,
    price: 80,
    amenitie: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isActive: false,
    reviews: [reviews[2]],
    city: city,
    owner: {
      id: 0,
      author: '',
      avatar: {
        src: '',
        alt: ''
      },
      rating: 0,
      date: '',
      description: ''
    }
  },
  {
    id: '4',
    image: ['img/apartment-03.jpg'],
    title: 'Canal View Prinsengracht',
    description: 'An incredibly compact habitat for anything you might want! Only the best space-saving techniques are used such as a sofa that transforms into your bed and others!.',
    isPremium: false,
    type: 'Apartment',
    rating: 5,
    numOfBedrooms: 5,
    numOfAdults: 4,
    price: 80,
    amenitie: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    isActive: false,
    reviews: [reviews[0], reviews[1]],
    city: city,
    owner: {
      id: 0,
      author: '',
      avatar: {
        src: '',
        alt: ''
      },
      rating: 0,
      date: '',
      description: ''
    }
  },
];
