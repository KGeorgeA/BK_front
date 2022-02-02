import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userSignin,
  UserSigninData,
  userSignup,
  UserSignupData,
} from "../../api/user.api";
import { signin, signup, validationError } from "../features/user/userSlice";
// import { UserState } from "../features/userSlice";

// добавить типизацию
export const signinThunk = createAsyncThunk<void, UserSigninData>(
  "userAuth/signin",
  async (data, { dispatch }) => {
    try {
      // console.log("signinThunk data", data);
      const res = await userSignin(data);
      // console.log("signinThunk response", res);

      if (res.data.message.type === "error") {
        dispatch(validationError(res.data));
      }
      if (res.data.message.type === "success") {
        dispatch(signin(res.data));
      }
    } catch (error: any) {
      // setValidationErrorMessage
      console.log("signinThunk err", error.response.message);
    }
  }
);

export const signupThunk = createAsyncThunk<void, UserSignupData>(
  "userAuth/signup",
  async (data, { dispatch }) => {
    try {
      // console.log("signupThunk data", data);
      const res = await userSignup(data);
      // console.log("signupThunk response", res);

      if (res.data.message.type === "error") {
        dispatch(validationError(res.data));
      }
      if (res.data.message.type === "success") {
        dispatch(signup(res.data));
      }
      // console.log("signupThunk response", res);
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

// export const signinTokenCheckThunk = createAsyncThunk('userAuth/tokenCheck', async (data, {dispatch}) => {
//   try {
//     const res = await 
//   } catch (error) {
    
//   }
// })