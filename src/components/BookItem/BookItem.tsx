import React from "react";

import Button from "@mui/material/Button";

import BookItemDiv from "./BookItem.styles";
import { BookImg, BookImgDiv } from "./BookImg.styles";
import { Link } from "react-router-dom";

const BookItem = () => {
  const bookname = "Дюна";
  const author = "Фрэнк Герберт";
  const price = 250;
  const path =
    "https://cs6.pikabu.ru/post_img/big/2017/09/28/10/1506614741122236788.jpg";
  return (
    <BookItemDiv className="book">
      <BookImgDiv>
        <BookImg src={path} alt={bookname} />
      </BookImgDiv>
      {/* Сделать ашки Linkами */}
      <div className="book__link-container link-container">
        <Link to="/" className="book__author-link link">
          {author}
        </Link>
      </div>
      <div className="book__link-container link-container">
        <Link to="/" className="book__title-link link">
          {bookname}
        </Link>
      </div>
      <div className="book__price">{price} Р</div>
      <Button sx={{ color: "white", backgroundColor: "#46c3d2" }}>
        Добавить
      </Button>
    </BookItemDiv>
  );
};

export default BookItem;
