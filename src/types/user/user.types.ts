export interface IUserState {
  user: IUser;
  isSignIn?: boolean;
  loading?: boolean;
  error: IResError;
}

export interface IUser {
  name: string;
  surname?: string;
  dob?: string;
  phoneNumber?: string;
  email: string;
  token?: string;
}

export interface IResAuthForToken {
  user: IUser;
  error: IResError;
}

export interface IResError {
  code?: string;
  type: string;
  value: string;
}

export interface IUserSigninDataApi {
  email: string;
  password: string;
}

export interface IUserSignupDataApi {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface IUserAuth {
  user: IUser,
  error: IResError
}

export type tokenType = string | null;

export interface IPasswordChangeData {
  passwordFirst: string;
  passwordSecond: string;
  password: string;

}