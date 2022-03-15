import { createSlice } from "@reduxjs/toolkit";
import { ICategoryFilter } from "../../types/categoryFilter/categoryFilter.types";
import { getCategoryFilterAction } from "./categoryFilterActions";

export const initialState: ICategoryFilter = {
  authors: [],
  genres: [],
};

export const categoryFilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    categoryFilterData: getCategoryFilterAction,
  },
});

export const { categoryFilterData } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
