import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getAuthorsApi } from "../../api/categoryFilter.api";
import { ICategoryFilter } from "../../types/categoryFilter/categoryFilter.types";
// import { api }
import { categoryFilterData } from "./categoryFilterSlice";

export const categoryFilterDataThunk = createAsyncThunk<void, void>(
  "filters/getData",
  async (data, { dispatch }) => {
    const res: AxiosResponse<ICategoryFilter> = await getAuthorsApi();

    dispatch(categoryFilterData(res.data));
  }
);
