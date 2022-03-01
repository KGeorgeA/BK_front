import React from "react";

import Button from "@mui/material/Button";

import BookItemDiv from "./BookItem.styles";
import { BookImg, BookImgDiv } from "./BookImg.styles";
import { Link } from "react-router-dom";
import { IBookItemProps } from "../../../types/book/book.types";
import { SERVER_PATH } from "../../../constants/serverPath";

const BookItem = (props: IBookItemProps) => {
  return (
    <BookItemDiv className="book">
      <BookImgDiv>
        <BookImg src={props.book.picture ? `${SERVER_PATH}${props.book.picture}` : "/images/NOT_FOUND_IMAGE.jpg"} alt={props.book.name} />
      </BookImgDiv>
      <div className="book__link-container link-container">
        <Link to="/" className="book__author-link link">
          {props.book.author}
        </Link>
      </div>
      <div className="book__link-container link-container">
        <Link to="/" className="book__title-link link">
          {props.book.name}
        </Link>
      </div>
      <div className="book__price">{props.book.price} Р</div>
      <Button sx={{ color: "white", backgroundColor: "#46c3d2" }}>
        Добавить
      </Button>
    </BookItemDiv>
  );
};

export default BookItem;
