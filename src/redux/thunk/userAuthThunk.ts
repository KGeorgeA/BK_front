import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userSignin,
  UserSigninData,
  userSignup,
  UserSignupData,
} from "../../api/user.api";
import store from "../store/store";
// import { UserState } from "../features/userSlice";

// добавить типизацию
export const signinThunk = createAsyncThunk<void, UserSigninData>(
  "userAuth/login",
  async (data, thunkAPI) => {
    try {
      const res = await userSignin(data);
      console.log("signinThunk res", res);

      if (res.status === 200) {
        // return { data, loggedIn: response.data.loggedIn };
      }
      thunkAPI.rejectWithValue({ data });
    } catch (error: any) {
      // setValidationErrorMessage
      console.log("signinThunk err", error.message);
    }
  }
);

export const signupThunk = createAsyncThunk<void, UserSignupData>(
  "userAuth/registration",
  async (data, thunkAPI) => {
    try {
      const res = await userSignup(data);
      console.log("signupThunk response", res);
    } catch (error: any) {
      console.log("signupThunk error", error);
    }
  }
);

export const signoutThunk = createAsyncThunk("userAuth/signout", async () => {
  try {
    console.log("signoutThunk");
  } catch (error: any) {
    console.log("signoutThunk", error);
  }
});
