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
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     state.data = action.payload.data;
  //     state.loggedIn.isLoggedIn = true;
  //   })
  // }
  extraReducers: {
    [`${loginThunk.fulfilled}`]: (state, { payload }) => {
      state.data = payload?.data;
      state.loggedIn.isLoggedIn = true;
      state.loading = false;
    },
    [`${loginThunk.pending}`]: (state) => {
      state.loading = true;
    },
    [`${loginThunk.rejected}`]: (state, { payload }) => {
      // state.isFetching = false;
      // state.isError = true;
      // state.errorMessage = payload.message;
      console.log("refected", state, payload);
    },
  },
});

// export const { login, registration, logout } = userAuthSlice.actions;
export const { registration, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
