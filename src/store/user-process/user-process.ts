import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from './api-action';
import { UserData } from '../../types/comment';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
    isSubmittingLogin: boolean;
  };

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  userData: null,
  isSubmittingLogin: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.isSubmittingLogin = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isSubmittingLogin = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isSubmittingLogin = false;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  },
});
