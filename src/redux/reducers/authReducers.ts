import { WritableDraft } from "immer/dist/internal";
import { initialState, UserState } from "../features/user/userSlice";

export const signinReducer = (
  state: WritableDraft<UserState>,
  { payload }: { payload: any }
) => {
  localStorage.setItem("token", payload.loggedIn.token);

  state.data = payload.data;
  state.loggedIn = payload.loggedIn;
  state.message = payload.message;
};

export const signupReducer = (
  state: WritableDraft<UserState>,
  { payload }: { payload: any }
) => {
  state = initialState;
  state.message = payload.message;
};

export const signoutReducer = (state: WritableDraft<UserState>) => {
  state = initialState;
  // state.message = { type: "", value: "" };
};

export const validationErrorReducer = (
  state: WritableDraft<UserState>,
  { payload }: { payload: any }
) => {
  state.message = payload.message;
};

export const tokenCheckReducer = (
  state: WritableDraft<UserState>,
  { payload }: { payload: any }
) => {
  state.data = payload.data;
  state.loggedIn = payload.loggedIn;
  state.message = payload.message;
};

// это было в юзер слайсе
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
