import { IBook } from "../types/book/book.types";
import { IAddComment } from "../types/comment/comment.types";
import api from "./axios";

export const getCommentsApi = async (data: IBook["id"]) => {
  console.log(data);
  const response = await api.post("/comments/getComments", {
    data: {
      bookId: data,
    },
  });

  return response;
};

export const addCommentApi = async (data: IAddComment) => {
  const response = await api.post("/comments/addComment", { data });

  return response;
};
