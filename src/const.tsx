import { City } from './types/location';

export const enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Root = '/',
  NotFound = '/*',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Favorite = '/favorite',
  Comments = '/comments',
  Logout = '/logout',
  Nearby = '/nearby',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type Cities = {
    [key: string]: City;
  };


export const cities: Cities = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
};

export enum SortType {
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  Rating = 'Top rated first',
  Popular = 'Popular',
}

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Offer = 'OFFER',
  App = 'APP',
  Favorite = 'FAVORITE',
  ReviewsData = 'REVIEWS_DATA',
  NearOffersData = 'NEAR_OFFERS_DATA',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const StarRate = {
  terribly: 1,
  badly: 2,
  'not bad': 3,
  good: 4,
  perfect: 5,
};
