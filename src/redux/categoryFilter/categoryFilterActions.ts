import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryFilter } from "../../types/categoryFilter/categoryFilter.types";

export const getCategoryFilterAction: CaseReducer<
  ICategoryFilter,
  PayloadAction<ICategoryFilter>
> = (state, action) => ({
  authors: action.payload.authors,
  genres: action.payload.genres,
});
