import { createSlice } from "@reduxjs/toolkit";
import { IBooksState } from "../../../types/book/book.types";
import { booksSearchAction } from "./bookSearchActions";
// import actions

export const initialState: IBooksState = {
  books: [],
};

export const bookSearchSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    booksSearch: booksSearchAction,
  },
});

export const { booksSearch } = bookSearchSlice.actions;
export default bookSearchSlice.reducer;
