import { City } from './types/coordinate';

export const Setting = {
  offerCount: 5
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const cities: City[] = [
  {
    title: 'Paris',
    coordinates: {
      lat: 48.85661,
      lng: 2.351499,
      zoom: 13
    }
  },
  {
    title: 'Brussels',
    coordinates: {
      lat: 50.846557,
      lng: 4.351697,
      zoom: 13
    }
  },
  {
    title: 'Cologne',
    coordinates: {
      lat: 50.938361,
      lng: 6.959974,
      zoom: 13
    }
  },
  {
    title: 'Amsterdam',
    coordinates: {
      lat: 52.37454,
      lng: 4.897976,
      zoom: 13
    }
  },
  {
    title: 'Hamburg',
    coordinates: {
      lat: 53.550341,
      lng: 10.000654,
      zoom: 13
    }
  },
  {
    title: 'Dusseldorf',
    coordinates: {
      lat: 51.225402,
      lng: 6.776314,
      zoom: 13
    }
  },
];
