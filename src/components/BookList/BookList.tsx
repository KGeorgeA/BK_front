import React, { useEffect, useState } from "react";

import { Pagination, PaginationItem } from "@mui/material";
import BookItem from "./BookItem/BookItem";
import BookListDiv from "./BookList.styles";
import NotFound from "../NotFound/NotFound";

import {
  Link as NavLink,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  IGetBookApi,
  IQueryType,
} from "../../types/book/book.types";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";
import { getParsedUrl } from "../../utils/helpers/queryParser";

const BookList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { books, pageQty, error } = useAppSelector((state) => state.booksData);
  const { author, genre, priceFilter } = useAppSelector(
    (state) => state.searchFiltersData
  );

  const [query, setQuery] = useState<IQueryType>({
    page: 1,
    author: null,
    genre: null,
    price: {
      minPrice: 0,
      maxPrice: 1000,
    },
  });

  useEffect(() => {
    const queryTitle: IGetBookApi = {
      page: query.page,
      size: 12,
      query: {
        author: author,
        genre: genre,
        priceFilter: {
          minPrice: priceFilter.minPrice,
          maxPrice: priceFilter.maxPrice,
        },
      },
    };
    dispatch(booksSearchThunk(queryTitle));
  }, [author, priceFilter, genre, location.search, dispatch, query.page]);

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
              setQuery({ ...query, page: num });
            }}
            size="large"
            boundaryCount={2}
            page={query.page}
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`${getParsedUrl({ author, genre, priceFilter })}&page=${
                  item.page
                }`}
                state={{ ...query, page: item.page }}
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
