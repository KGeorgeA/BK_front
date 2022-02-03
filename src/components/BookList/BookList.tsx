import React from "react";
import BookItem from "../BookItem/BookItem";
import BookListDiv from "./BookList.styles";

const BookList = () => {
  return (
    <BookListDiv>
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
      <BookItem />
    </BookListDiv>
  );
};

export default BookList;
