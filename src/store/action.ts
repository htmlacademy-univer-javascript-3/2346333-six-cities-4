import {createAction} from '@reduxjs/toolkit';
import { AppRoute, NameSpace } from '../const';

export const redirectToRoute = createAction<AppRoute>(`${NameSpace.App}/redirectToRoute`);
