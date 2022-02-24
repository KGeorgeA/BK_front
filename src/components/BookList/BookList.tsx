import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link as NavLink, useLocation } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import BookListDiv from "./BookList.styles";
import { useDispatch } from "react-redux";
import { IBooksMinMaxPrice, IGetBookApi } from "../../types/book/book.types";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

interface BookListProps {
  query: string;
}

const BookList = (props: BookListProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  // const [posts, setPosts] = useState<Array<object>>([]); // зачем мне стейт с массивом постов?
  const query = location.search;
  const [page, setPage] = useState<number>(
    Number(query.split("page=")[1]) || 1
  );
  // const [price, setPrice] = useState<IBooksMinMaxPrice>({minPrice: 0, maxPrice: 1000});
  const { books, pageQty } = useAppSelector((state) => state.bookData);
  console.log("booklist location",location)
  useEffect(() => {
    const queryTitle: IGetBookApi = {
      page,
      size: 12,
      query: {
        author: '12',
      //   genre: [''],
      //   price: {
      //     maxPrice: price.minPrice,
      //     minPrice: price.maxPrice,
      //   }
      }
    };
    dispatch(booksSearchThunk(queryTitle));
  }, [query, page]);

  return (
    <>
      {books.length !== 0 ? (
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
          {/* {books.length !== 0 && (
      <BookListDiv className="booklist__items">
        {
          books.map((item, index) => {
            return <BookItem key={index} book={item}/>
          })
        }
      </BookListDiv>
    )} */}
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
