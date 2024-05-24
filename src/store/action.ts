import {createAction} from '@reduxjs/toolkit';
import { City } from '../types/coordinate';
import { Offers } from '../types/offer';
import { SortType } from '../const';

export const changeCity = createAction<City>('changeCity');
export const fillOfferList = createAction<Offers>('fillOfferList');
export const changeSortOption = createAction<SortType>('changeSortOption');
