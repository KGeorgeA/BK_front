import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getBooksApi } from "../../../api/book.api";
import { IBooksQuerySearch, IGetBookApi } from "../../../types/book/book.types";
import { booksSearch } from "./bookSearchSlice";
// import {} from "../../../types/book/book.types";

export const booksSearchThunk = createAsyncThunk<void, IGetBookApi>(
  "bookSearch/getBooks",
  async (data, { dispatch }) => {
    const res: AxiosResponse<IBooksQuerySearch> = await getBooksApi(data);

    dispatch(booksSearch(res.data));
  }
);
