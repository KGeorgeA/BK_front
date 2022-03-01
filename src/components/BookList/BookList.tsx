import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";
import BookItem from "./BookItem/BookItem";
import BookListDiv from "./BookList.styles";
import { useDispatch } from "react-redux";
import { IBooksMinMaxPrice, IGetBookApi } from "../../types/book/book.types";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import NotFound from "../NotFound/NotFound";

export interface IStateType {
  page?: number;
  filter?: string;
}

const BookList = () => {
  const dispatch = useDispatch();
  
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as IStateType || 1;
  
  const [page, setPage] = useState<number>(
    1// (typeof locationState.page) === "number" ? locationState.page : 1
  );
  const { books, pageQty, error } = useAppSelector((state) => state.bookData);
  const { author, genre, price } = useAppSelector(
    (state) => state.searchFiltersData
  );

  useEffect(() => {
    const queryTitle: IGetBookApi = {
      page,
      size: 12,
      query: {
        author: author,
        genre: genre,
        price,
      },
    };
    // console.log("query", queryTitle);
    dispatch(booksSearchThunk(queryTitle));
  }, [locationState, page, author, price]);

  return (
    <>
      {error?.type === "error" ? (
        <NotFound></NotFound>
      ) : books.length !== 0 ? (
        <div
          className="booklist__wrapper"
          style={{
            marginLeft: "20px",
          }}
        >
          <Pagination
            className="booklist__pagination"
            count={pageQty}
            onChange={(_, num) => {
              setPage(num);
            }}
            size="large"
            boundaryCount={2}
            page={page}
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`${item.page === 1 ? "?page=1" : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
          <BookListDiv className="booklist__items">
            {books.map((item, index) => {
              return <BookItem key={index} book={item} />;
            })}
          </BookListDiv>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default BookList;
