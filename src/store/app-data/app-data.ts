import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';

type AppDataState = {
  error: string | null;
};

const initialState: AppDataState = {
  error: null,
};

export const AppData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  }
});

export const {changeError} = AppData.actions;
