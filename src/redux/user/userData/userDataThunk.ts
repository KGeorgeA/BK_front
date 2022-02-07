import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { userDataChange, userPasswordChange, userSetAvatar } from "../../../api/user.api";
import {
  dataChange,
  passwordChange,
  avatarChange,
} from "./userDataSlice";
import {
  IPasswordChangeData,
  IResError,
  IUser,
  IUserState,
} from "../../../types/user/user.types";
import { error } from "../userAuth/userAuthSlice";

export const dataChangeThunk = createAsyncThunk<void, IUser>(
  "userData/datachange",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IUserState> = await userDataChange(data);
      if (res.data.error.type === 'error') {
        dispatch(error(res.data.error));
      } else {
        dispatch(dataChange(res.data.user));
      }
    } catch (error) {
      console.log("Thunk data change error: ", error);
    }
  }
);

export const passwordChangeThunk = createAsyncThunk<void, IPasswordChangeData>(
  "userData/passwordchange",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IResError> = await userPasswordChange(data);
      if (res.data.type === "error") {
        dispatch(error(res.data));
      } else {
        dispatch(passwordChange(res.data));
      }
    } catch (error) {
      console.log("Thunk password change error: ", error);
    }
  }
);

export const avatarChangeThunk = createAsyncThunk<void, unknown>(
  "userData/avatarchange",
  async (data, { dispatch }) => {
    try {
      // const res: AxiosResponse<FileList> = await userSetAvatar(data);
      console.log('123');
      
    } catch (error) {
      console.log("Thunk password change error: ", error);
    }
  }
);
