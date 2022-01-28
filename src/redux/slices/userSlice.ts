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
  };
}

const initialState: UserState = {
  data: {
    name: "",
    surname: "",
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    registration: (state, action) => {
      state.data = action.payload;
    },
  },
});

// export default userSlice.reducer;
