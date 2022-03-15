import { createSlice } from "@reduxjs/toolkit";
import { IComments } from "../../types/comment/comment.types";
import { addCommentAction, getCommentsAction } from "./commentActions";

export const initialState: IComments = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: getCommentsAction,
    addComment: addCommentAction,
  },
});

export const { getComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
