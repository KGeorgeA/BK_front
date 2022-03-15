import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBooksQuerySearch, IBooksState } from "../../../types/book/book.types";

export const booksSearchAction: CaseReducer<
  IBooksState,
  PayloadAction<IBooksQuerySearch>
> = (state, action) => ({
  ...state,
  page: action.payload.page,
  books: action.payload.books,
  pageQty: action.payload.pageQty,
  price: action.payload.price,
  error: action.payload.error,
});
