import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getBookApi } from "../../../api/book.api";
import { IBook } from "../../../types/book/book.types";
import { selectBook } from "./bookSelectedSlice";
// import {} from "../../../types/book/book.types";

export const bookSelectThunk = createAsyncThunk<void, IBook['id']>(
  "bookSearch/getBooks",
  async (data, { dispatch }) => {
    const res: AxiosResponse<IBook> = await getBookApi(data);

    dispatch(selectBook(res.data));
  }
);
