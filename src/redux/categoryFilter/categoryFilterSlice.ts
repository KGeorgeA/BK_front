import { createSlice } from "@reduxjs/toolkit";
import { IAuthorState } from "../../types/categoryFilter/categoryFilter.types";
import { getCategoryFilterAction } from "./categoryFilterActions";
//import actions

export const initialState: IAuthorState = {
  authors: [],
  genres: [],
};

export const categoryFilterSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    categoryFilterData: getCategoryFilterAction,
  },
});

export const { categoryFilterData } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
