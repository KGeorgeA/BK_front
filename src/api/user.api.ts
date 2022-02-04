import { IUserSigninDataApi, IUserSignupDataApi, tokenType } from "../types/user/user.types";
import api from "./axios";

export const signinApi = async (data: IUserSigninDataApi) => {
  const response = await api.post("/api/signin", { data });

  return response;
};

export const signupApi = async (data: IUserSignupDataApi) => {
  const response = await api.post("/api/signup", { data });

  return response;
};

export const tokenAuthApi = async (data: tokenType) => {
  const response = await api.get("/api/tokenauth", {data});

  return response;
};
