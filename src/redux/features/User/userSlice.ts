import { createSlice } from "@reduxjs/toolkit";
// import { loginThunk } from "../../thunk/userAuthThunk";

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
  errorMessage: "",
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
    // registration: (state, action) => {
    //   // Надо исправить это
    // },
    logout: (state) => {
      state = initialState;
    },
  },
  // extraReducers: {
  //   [`${loginThunk.pending}`]: (state) => {
  //     try {
  //       state.loading = true;
  //     } catch (error) {
  //       console.log("pending", error);
  //     }
  //   },
  //   [`${loginThunk.rejected}`]: (state, { payload }) => {
  //     console.log("rejected", { payload });
  //     try {
  //       state.errorMessage = payload.message;
  //       state.loading = false;
  //     } catch (error) {
  //       console.log("rejected", error);
  //     }

  //     // state.isFetching = false;
  //     // state.isError = true;
  //   },
  //   [`${loginThunk.fulfilled}`]: (state, { payload }) => {
  //     try {
  //       state.data = payload.data || initialState.data;
  //       state.loggedIn.isLoggedIn = payload.loggedIn.isLoggedIn || false;
  //       state.loggedIn.token = payload.loggedIn.token || "";
  //       state.loading = false;
  //     } catch (error) {
  //       console.log("fulfilled error", error);
  //     }
  //   },
  // },
});

// export const { login, registration, logout } = userAuthSlice.actions;
export const {  logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
