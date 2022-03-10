import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../../types/book/book.types";

export const bookSelectAction: CaseReducer<IBook, PayloadAction<IBook>> = (
  state,
  action
) => ({
  id: action.payload.id,
  name: action.payload.name,
  price: action.payload.price,
  picture: action.payload.picture,
  author: action.payload.author,
  publisher: action.payload.publisher,
  description: action.payload.description,
  genre: action.payload.genre,
  rating: action.payload.rating,
});
