import { createSlice } from "@reduxjs/toolkit";
import { IBooksState } from "../../../types/book/book.types";
import { booksSearchAction } from "./bookSearchActions";

export const initialState: IBooksState = {
  books: [],
};

export const bookSearchSlice = createSlice({
  name: "booksData",
  initialState,
  reducers: {
    booksSearch: booksSearchAction,
  },
});

export const { booksSearch } = bookSearchSlice.actions;
export default bookSearchSlice.reducer;
