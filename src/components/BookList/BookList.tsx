import React, { useEffect, useState } from "react";

import { Pagination, PaginationItem } from "@mui/material";
import BookItem from "./BookItem/BookItem";
import BookListDiv from "./BookList.styles";
import NotFound from "../NotFound/NotFound";

import { Link as NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IBookFilters, IGetBookApi } from "../../types/book/book.types";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { IQueryType, /* ISearchQueryType, */ searchResolver } from "../../utils/helpers/searchResolver";



const BookList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as IQueryType;
  // console.log("loc state", locationState);
  // console.log("loc", location);
  // searchResolver()

  const [query, setQuery] = useState<IQueryType>({
    page: locationState === null ? 1 : locationState.page,
    author: locationState === null ? null : locationState.author,
    genre: locationState === null ? null : locationState.genre,
    price: locationState === null ? null : locationState.price,
  });
  // console.log(query);

  const [page, setPage] = useState<number>(
    1 // (typeof locationState.page) === "number" ? locationState.page : 1
  );

  const { books, pageQty, error } = useAppSelector((state) => state.booksData);
  const { author, genre, price } = useAppSelector(
    (state) => state.searchFiltersData
  );

  useEffect(() => {
    // const { resolvedPage, resolvedAuthor, resolvedGenre, resolvedPrice } = 
    searchResolver(location.search);
    const queryTitle: IGetBookApi = {
      page,
      size: 12,
      query: {
        author: author,
        genre: genre,
        price,
      },
    };
    dispatch(booksSearchThunk(queryTitle));
  }, [locationState, page, author, price]);

  return (
    <>
      {error?.type === "error" ? (
        <NotFound />
      ) : books.length !== 0 ? (
        <div
          className="booklist__wrapper"
          style={{
            marginLeft: "20px",
            width: "100%",
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
                to={`${author ? `?author=${author}` : ""}${item.page === 1 ? "?page=1" : `?page=${item.page}`}`}
                state={{ ...query, page: item.page === 1 ? 1 : item.page }}
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
