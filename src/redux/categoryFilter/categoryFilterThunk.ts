import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getCategoryFiltersApi } from "../../api/categoryFilter.api";
import { ICategoryFilter } from "../../types/categoryFilter/categoryFilter.types";
import { categoryFilterData } from "./categoryFilterSlice";

export const categoryFilterDataThunk = createAsyncThunk<void, void>(
  "filters/getData",
  async (data, { dispatch }) => {
    const res: AxiosResponse<ICategoryFilter> = await getCategoryFiltersApi();

    dispatch(categoryFilterData(res.data));
  }
);
