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

export type UserToken = string | null;

export const userSignin = async (data: UserSigninData) => {
  // console.log("api signin data", data);
  const response = await api.post("/api/signin", { data });
  // console.log("api signin response",response);

  return response;
};

export const userSignup = async (data: UserSignupData) => {
  // console.log("api signup data", data);
  // const response = await api.post("/api/signup", { data });
  const response = await api.post("/api/signup", { data });
  // console.log("api signup response",response);

  return response;
};

export const tokenCheck = async (data: UserToken) => {
  console.log('345 tokencheck user request', data);
  const response = await api.get("/api/tokenCheck", {data});
  console.log('345 tokencheck user response', response);

  return response;
};
