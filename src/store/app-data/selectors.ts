import { NameSpace, SortType } from '../../const';
import { City } from '../../types/location';
import { State } from '../../types/state';

export const getSelectedSortType = (state: State): SortType => state[NameSpace.App].selectedSortType;
export const getSelectedCity = (state: State): City => state[NameSpace.App].selectedCity;
