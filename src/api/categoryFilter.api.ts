// import { IAuthorState } from "../types/author/author.types";
import api from "./axios";

export const getAuthorsApi = async () => {
  const response = await api.get("/filter/getfilterdata");

  return response;
};
