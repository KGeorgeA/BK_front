import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBooksQuerySearch, IBooksState } from "../../../types/book/book.types";
// import types
import { initialState } from "./bookSearchSlice";

export const booksSearchAction: CaseReducer<IBooksState, PayloadAction<IBooksQuerySearch>> = (state, action) => ({
  books: action.payload.books,
  pageQty: action.payload.pageQty,
});