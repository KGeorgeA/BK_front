import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import BookItem from "../BookItem/BookItem";
import BookListDiv from "./BookList.styles";

const BookList = () => {
  const [posts, setPosts] = useState<Array<object>>([]);
  const [query, setQeury] = useState<string>("")
  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(0);

  useEffect(()=> {
    
  }, [query, page])

  return (
    <div
      className="booklist__wrapper"
      style={{
        marginLeft: "20px",
      }}
    >
      <Pagination
        className="booklist__pagination"
        count={50 /* с сервака брать */}
        size="large"
        boundaryCount={2}
        page={page}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
          />
        )}
      />
      <BookListDiv className="booklist__items">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </BookListDiv>
    </div>
  );
};

export default BookList;
