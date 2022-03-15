import { createSlice } from "@reduxjs/toolkit";
import { IBookFilters } from "../../../types/book/book.types";
import { clearSearchFiltersAction, searchFiltersAction } from "./userFiltersAction";

export const initialState: IBookFilters = {
  author: null,
  genre: null,
  priceFilter: {
    minPrice: 0,
    maxPrice: 1000
  },
};

export const searchFiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filteredSearch: searchFiltersAction,
    clearFilters: clearSearchFiltersAction,
  },
});

export const { filteredSearch, clearFilters } = searchFiltersSlice.actions;
export default searchFiltersSlice.reducer;
