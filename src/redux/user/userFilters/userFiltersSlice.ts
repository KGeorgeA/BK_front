import { createSlice } from "@reduxjs/toolkit";
import { IBookFilters } from "../../../types/book/book.types";
import { searchFiltersAction } from "./userFiltersAction";

export const initialState: IBookFilters = {
  author: "",
  genre: [],
  price: {
    minPrice: 0,
    maxPrice: 0,
  },
};

export const searchFiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filteredSearch: searchFiltersAction,
  },
});

export const { filteredSearch } = searchFiltersSlice.actions;
export default searchFiltersSlice.reducer;
