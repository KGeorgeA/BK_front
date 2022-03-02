//import types
import { IGetBookApi } from "../types/book/book.types";
import api from "./axios";

export const getBooksApi = async (data: IGetBookApi) => {
  const response = await api.post("/book/multiple", { data });

  return response;
};
