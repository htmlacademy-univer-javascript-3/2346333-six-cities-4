import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/coordinate';
import { Offers } from '../types/offer';

export const changeCity = createAction<City>('changeCity');
export const fillOfferList = createAction<Offers>('fillOfferList');
