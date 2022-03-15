import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBookFilters } from "../../../types/book/book.types";

export const searchFiltersAction: CaseReducer<
  IBookFilters,
  PayloadAction<IBookFilters>
> = (state, action) => ({
  ...state,
  author: action.payload?.author,
  genre: action.payload?.genre,
  priceFilter: action.payload?.priceFilter,
});

export const clearSearchFiltersAction: CaseReducer<
  IBookFilters,
  PayloadAction<IBookFilters>
> = (state, action) => ({
  author: action.payload?.author,
  genre: action.payload?.genre,
  priceFilter: action.payload?.priceFilter,
});
