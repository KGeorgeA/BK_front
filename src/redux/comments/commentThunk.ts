import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { addCommentApi, getCommentsApi } from "../../api/comment.api";
import { IBook } from "../../types/book/book.types";
import { getComments, addComment } from "./commentSlice";
import {
  IAddComment,
  IComment,
  IComments,
} from "../../types/comment/comment.types";

export const addCommentThunk = createAsyncThunk<void, IAddComment>(
  "comments/addComment",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IComment> = await addCommentApi(data);

      dispatch(addComment(res.data));
    } catch (error: any) {
      console.log("addCommentThunk err", error.response.message);
    }
  }
);

export const getCommentsThunk = createAsyncThunk<void, IBook["id"]>(
  "comments/getComments",
  async (data, { dispatch }) => {
    try {
      const res: AxiosResponse<IComments> = await getCommentsApi(data);

      dispatch(getComments(res.data));
    } catch (error: any) {
      console.log("getCommentsThunk err", error.response.message);
    }
  }
);
