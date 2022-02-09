import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getBooksApi } from "../../../api/book.api";
import { IBooksQuerySearch, IBooksState, IGetBookApi } from "../../../types/book/book.types";
// import {} from "../../../types/book/book.types";
import { booksSearch } from "./bookSearchSlice";

export const booksSearchThunk = createAsyncThunk<void, IGetBookApi>(
  "book/getBooks",
  async (data, {dispatch}) => {
    const res: AxiosResponse<IBooksQuerySearch> = await getBooksApi(data);
    
    dispatch(booksSearch(res.data));
  }
)