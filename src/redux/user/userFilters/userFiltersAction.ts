import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBookFilters } from "../../../types/book/book.types";

export const searchFiltersAction: CaseReducer<
  IBookFilters,
  PayloadAction<IBookFilters>
> = (state, action) => ({
  ...state,
  author: action.payload?.author,
  genre: action.payload?.genre,
  price: action.payload?.price,
});