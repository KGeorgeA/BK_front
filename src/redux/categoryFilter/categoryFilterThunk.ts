import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { getAuthorsApi } from "../../api/categoryFilter.api";
import { IAuthorState } from "../../types/categoryFilter/categoryFilter.types";
// import { api }
import { categoryFilterData } from "./categoryFilterSlice";

export const authorsDataThunk = createAsyncThunk<void, void>(
  "author/getData",
  async (data, { dispatch }) => {
    const res: AxiosResponse<IAuthorState> = await getAuthorsApi();
    console.log("authors thunk res", res.data);

    dispatch(categoryFilterData(res.data));
  }
);
