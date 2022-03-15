import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { SERVER_PATH } from "../../../constants/serverPath";
import { bookSelectThunk } from "../../../redux/book/bookSelected/bookSelectedThunk";
import { getCommentsThunk } from "../../../redux/comments/commentThunk";
import { useAppSelector } from "../../../utils/hooks/reduxHooks";
import Comments from "../../Comments/Comments";
import {
  BookAuthor,
  BookDescription,
  BookInfo,
  BookMainInfo,
  BookName,
  BookPrice,
  BookRating,
  BookSection,
  BookTitle,
  BookUserRate,
  BookImgDiv,
  SingleBookImg,
} from "./BookSection.styles";

function SingleBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const bookData = useAppSelector((state) => state.bookData);

  useEffect(() => {
    params ? dispatch(bookSelectThunk(Number(params.id))) : navigate("/");
  }, [params, dispatch, navigate]);

  useEffect(() => {
    dispatch(getCommentsThunk(Number(params.id)));
  }, []);

  return (
    <Box>
      <BookSection>
        <BookTitle className="book-title">
          <BookAuthor className="book-author">{bookData.author}</BookAuthor>
          <BookName className="book-name">{bookData.name}</BookName>
        </BookTitle>
        <BookInfo className="book-info">
          <BookImgDiv className="book-img">
            <SingleBookImg
              src={`${SERVER_PATH}${bookData.picture}`}
              alt={`${bookData.name}`}
            />
          </BookImgDiv>
          <BookMainInfo className="book-info__main">
            <BookDescription className="book-description">
              {bookData.description}
            </BookDescription>
            <BookPrice className="book-price">{bookData.price} P</BookPrice>
            <BookRating className="book-rating">
              Рейтинг книги: {bookData.rating}
            </BookRating>
            <BookUserRate className="book-userRate">
              Оценить книгу: {" "}
            </BookUserRate>
          </BookMainInfo>
        </BookInfo>
      </BookSection>
      <Comments />
    </Box>
  );
}

export default SingleBook;
