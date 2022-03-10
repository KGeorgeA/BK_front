import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/book/book.types";
import { bookSelectAction } from "./bookSelectedActions";

export const initialState: IBook = {
    id: 0,
    name: '',
    price: 0,
    picture: '',
    author: '',
    publisher: '',
    description: '',
    genre: [],
};

export const bookSelectedSlice = createSlice({
  name: "bookData",
  initialState,
  reducers: {
    selectBook: bookSelectAction,
  },
});

export const { selectBook } = bookSelectedSlice.actions;
export default bookSelectedSlice.reducer;
