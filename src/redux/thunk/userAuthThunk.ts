import instance from "../../axios/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { login } from "../actions/userAuthActions";
// import store from "../store/store";
// import { UserState } from "../features/userSlice";

// добавить типизацию
export const loginThunk = createAsyncThunk<object, object>(
  "userAuth/login",
  async (data, thunkAPI) => {
    try {
      const response = await instance.post("/api/login", {data});
      console.log("loginThunk res", response);

      if (response.status === 200) {
        return { data, loggedIn: response.data.loggedIn };
      }
      return thunkAPI.rejectWithValue({ data });
    } catch (error) {
      console.error("loginThunk err", error);
    }
  }
);
