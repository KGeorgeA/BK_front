import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link as NavLink } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import BookListDiv from "./BookList.styles";
import { useDispatch } from "react-redux";
import { IGetBookApi } from "../../types/book/book.types";
import { booksSearchThunk } from "../../redux/book/bookSearch/bookSearchThunk";
import { useAppSelector } from "../../utils/hooks/reduxHooks";

interface BookListProps {
  query: string;
}

const BookList = (props:BookListProps) => {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState<Array<object>>([]); // зачем мне стейт с массивом постов?
  const query = props.query;
  const [page, setPage] = useState<number>(Number(query.split('page=')[1]) || 1);
  const { books, pageQty } = useAppSelector((state) => state.bookData);
  
  useEffect(() => {
    const queryTitle: IGetBookApi = {
      page,
      size: 12,
      // query: {
      //   author: '',
      //   genre: [''],
      //   price: {
      //     maxPrice: 0,
      //     minPrice: 0,
      //   }
      // } 
    };
    dispatch(booksSearchThunk(queryTitle));
  }, [query, page]);

  return (
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
            to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
      {books.length !== 0 && (
        <BookListDiv className="booklist__items">
          {
            books.map((item, index) => {
              return <BookItem key={index} book={item}/>
            })
          }
        </BookListDiv>
      )}
    </div>
  );
};

export default BookList;
