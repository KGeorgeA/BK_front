import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../axios/axiosInstance";

// Не готово от слова совсем
// доделать/переделать

export interface UserState {
  data: {
    name: string;
    surname: string;
    email: string;
    password: string;
  },
  loggedIn: {
    isLoggedIn: boolean;
    token: string;
  }
}

const initialState: UserState = {
  data: {
    name: "",
    surname: "",
    email: "",
    password: "",
  },
  loggedIn: {
    isLoggedIn: false,
    token: ""
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // Надо исправить это
      state.data = action.payload.data;
      state.loggedIn = action.payload.loggedIn;
    },
    registration: (state, action) => {
      // Надо исправить это
      state.data = action.payload.data;
    },
    logout: (state) => {
      state.loggedIn.isLoggedIn = false;
    }
  },
});

// export default userSlice.reducer;
