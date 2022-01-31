import instance from "../../axios/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { login } from "../actions/userAuthActions";
// import store from "../store/store";
// import { UserState } from "../features/userSlice";

// добавить типизацию
export const loginThunk = createAsyncThunk<object, object>(
  "userAuth/login",
  async (data, thunkAPI) => {
    // const initial = {data};
    try {
      const response = await instance.post("/api/login", { data });
      console.log(response);
      if (response.status === 200) {
        return { data, loggedIn: { isLoggedIn: true, token: "" } };
      }
      return thunkAPI.rejectWithValue(data);
    } catch (error) {
      console.error(error);
    }
  }
);
