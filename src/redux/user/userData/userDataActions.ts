import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  IResError,
  IUser,
  IUserState,
} from "../../../types/user/user.types";

// user data changing actions
export const userDataChangeAction: CaseReducer<
  IUserState,
  PayloadAction<IUser>
> = (state, action) => ({
  ...state,
  user: action.payload,
});

export const passwordChangeAction: CaseReducer<
  IUserState,
  PayloadAction<IResError>
> = (state, action) => ({
  ...state,
  error: action.payload,
});

export const avatarChangeAction: CaseReducer<
  {},
  PayloadAction<unknown>
> = (state, action) => ({
  ...state,
});
