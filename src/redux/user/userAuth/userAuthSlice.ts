import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {
  signinAction,
  signupAction,
  signoutAction,
  tokenAuthAction,
  errorAction,
} from "./userAuthActions";

export const initialState: IUserState = {
  user: {
    name: "",
    email: "",
    token: "",
  },
  // isSignIn: false,
  loading: false,
  error: {
    type: "",
    value: "",
  },
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signin: signinAction,
    signup: signupAction,
    signout: signoutAction,
    error: errorAction,
    tokenAuth: tokenAuthAction,
  },
  // extraReducers: {
  //   [`userAuth/tokenCheck/fulfilled`]: (state, action) => {
  //     return { ...state, loading: false };
  //   },
  //   [`userAuth/tokenCheck/pending`]: (state, action) => {
  //     return { ...state, loading: true };
  //   },
  // },
});

export const { signin, signup, signout, error, tokenAuth } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
