import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IComments } from "../../types/comment/comment.types";

export const getCommentsAction: CaseReducer<
  IComments,
  PayloadAction<IComments>
> = (state, action) => ({
  comments: action.payload.comments,
});

export const addCommentAction: CaseReducer<
  IComments,
  PayloadAction<IComment>
> = (state, action) => ({
  comments: [
    ...state.comments,
    {
      userId: action.payload.userId,
      commentId: action.payload.commentId,
      userName: action.payload.userName,
      userSurname: action.payload.userSurname,
      userAvatarPath: action.payload.userAvatarPath,
      parentId: action.payload.parentId,
      userComment: action.payload.userComment,
    },
  ],
});
