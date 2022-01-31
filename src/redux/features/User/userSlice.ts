import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "../../thunk/userAuthThunk";

// Не готово от слова совсем
// доделать/переделать

export interface UserState {
  data: {
    name: string;
    email: string;
  };
  loggedIn: {
    isLoggedIn: boolean;
    token: string;
  };
  loading: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  data: {
    name: "",
    email: "",
  },
  loggedIn: {
    isLoggedIn: false,
    token: "",
  },
  loading: false,
  errorMessage: '',
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    // login: (state, action) => {
    //   // Надо исправить это
    //   state.data = action.payload.data;
    //   state.loggedIn = action.payload.loggedIn;
    // },
    registration: (state, action) => {
      // Надо исправить это
    },
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [`${loginThunk.fulfilled}`]: (state, {payload}) => {
      console.log("fulfilled",payload);
      
      state.data = payload.data || initialState.data;
      state.loggedIn.isLoggedIn = payload.loggedIn.isLoggedIn || false;
      state.loggedIn.token = payload.loggedIn.token || "";
      state.loading = false;
    },
    [`${loginThunk.pending}`]: (state) => {
      state.loading = true;
    },
    [`${loginThunk.rejected}`]: (state, { payload }) => {
      console.log("rejected",{payload});
      
      // state.isFetching = false;
      // state.isError = true;
      state.errorMessage = payload.message;
      state.loading = false;
    },
  },
});

// export const { login, registration, logout } = userAuthSlice.actions;
export const { registration, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
