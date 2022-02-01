import React from "react";

import Button from "@mui/material/Button";

import BookItemDiv from "./BookItem.styles";
import { BookImg, BookImgDiv } from "./BookImg.styles";

const BookItem = () => {
  const bookname = "Дюна";
  const author = "Фрэнк Герберт";
  const price = 250;
  const path = "https://cs6.pikabu.ru/post_img/big/2017/09/28/10/1506614741122236788.jpg";
  return (
    <BookItemDiv>
      <BookImgDiv>
        <BookImg src={path} alt={bookname} />
      </BookImgDiv>
      {/* Сделать ашки Linkами */}
      <div>
        <a href="#" className="author-link">
          {author}
        </a>
      </div>
      <div>
        <a href="#" className="title-link">
          {bookname}
        </a>
      </div>
      <div>{price} Р</div>
      <Button>Добавить</Button>
    </BookItemDiv>
  );
};

export default BookItem;
