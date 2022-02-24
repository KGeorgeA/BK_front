import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getAuthorsApi } from "../../api/categoryFilter.api";
import { ICategoryFilter } from "../../types/categoryFilter/categoryFilter.types";
// import { api }
import { categoryFilterData } from "./categoryFilterSlice";

export const authorsDataThunk = createAsyncThunk<void, void>(
  "filters/getData",
  async (data, { dispatch }) => {
    const res: AxiosResponse<ICategoryFilter> = await getAuthorsApi();
    // console.log("category filter thunk res", res.data);

    dispatch(categoryFilterData(res.data));
  }
);
