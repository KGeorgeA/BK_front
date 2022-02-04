export interface IUserState {
  user: IUser;
  isSignIn: boolean;
  error: IResError;
}

export interface IUser {
  name: string;
  email: string;
  surname?: string;
  dob?: string;
  phoneNumber?: string;
  token: string;
}

export interface IResAuthForToken {
  user: IUser;
  error: IResError;
}

export interface IResError {
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