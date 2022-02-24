import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IAuthorState } from "../../types/categoryFilter/categoryFilter.types";
import { initialState } from "./categoryFilterSlice";

export const getCategoryFilterAction: CaseReducer<
  IAuthorState,
  PayloadAction<IAuthorState>
> = (state, action) => ({
  authors: action.payload.authors,
  genres: action.payload.genres,
});
