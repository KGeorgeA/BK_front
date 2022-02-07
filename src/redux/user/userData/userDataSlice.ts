import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../../types/user/user.types";
import {passwordChangeAction, userDataChangeAction} from './userDataActions'

export const initialState: IUserState = {
  user: {
    name: "",
    surname: "",
    dob: "",
    phoneNumber: "",
    email: "",
  },
  error: {
    type: "",
    value: "",
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    dataChange: userDataChangeAction,
    passwordChange: passwordChangeAction,
    avatarChange: (state, action) => ({ ...state }),
  },
});

export const { dataChange, passwordChange, avatarChange } =
  userDataSlice.actions;
export default userDataSlice.reducer;
