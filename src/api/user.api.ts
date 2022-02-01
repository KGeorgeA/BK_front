import api from "./axios";

export type UserSigninData = {
  email: string;
  password: string;
};

export type UserSignupData = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export const userSignin = async (data: UserSigninData) => {
  const response = await api.post("/api/login", { data });
  return response.data;
};

export const userSignup = async (data: UserSignupData) => {
  const response = await api.post("/registration", { data });
  return response.data;
};
