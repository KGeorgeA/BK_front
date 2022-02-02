import { createSlice } from "@reduxjs/toolkit";

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
  // loading: boolean;
  message: {
    type: string,
    value: string,
    // ещё что?
  }
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
  // loading: false,
  message: {
    type: "",
    value: "",
  }
};

// const tokenInitialState: UserState = {}

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signin: (state, {payload}) => {
      localStorage.setItem('token', payload.loggedIn.token);
      
      state.data = payload.data;
      state.loggedIn = payload.loggedIn;
      state.message = payload.message
    },
    signup: (state, { payload }) => {
      state = initialState;
      state.message = payload.message;
    },
    signout: (state) => {
      state = initialState;
      state.message = {type: "", value: ""}
    },
    validationError: (state, {payload}) => {
      state.message = payload.message;
    },
    // signinTokenCheck: (state) => {

    // }
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


export const { signin, signup, signout, validationError } = userAuthSlice.actions;
export default userAuthSlice.reducer;
