import { createSlice } from "@reduxjs/toolkit";
import { signinReducer, signoutReducer, signupReducer, tokenCheckReducer, validationErrorReducer } from "../../reducers/authReducers";

export interface UserState {
  data: {
    name: string;
    email: string;
    id: string;
  };
  loggedIn: {
    isLoggedIn: boolean;
    token: string;
  };
  message: {
    type: string,
    value: string,
  }
}

export const initialState: UserState = {
  data: {
    name: "",
    email: "",
    id: "",
  },
  loggedIn: {
    isLoggedIn: false,
    token: "",
  },
  message: {
    type: "",
    value: "",
  }
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signin: signinReducer,
    signup: signupReducer,
    signout: signoutReducer,
    validationError: validationErrorReducer,
    tokencheck: tokenCheckReducer
  },
});


export const { signin, signup, signout, validationError, tokencheck } = userAuthSlice.actions;
export default userAuthSlice.reducer;
