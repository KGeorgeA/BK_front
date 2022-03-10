import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { bookSelectThunk } from "../../../redux/book/bookSelected/bookSelectedThunk";
import { useAppSelector } from "../../../utils/hooks/reduxHooks";

function SingleBook() {
  // const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // console.log(location);
  const bookData = useAppSelector((state) => state.bookData);

  useEffect(() => {
    params ? dispatch(bookSelectThunk(Number(params.id))) : navigate("/");
  }, [params]);

  /*
    id
    name
    author
    description
    price
    publisher
    picture
    rating
  */

  return (
    <Box>
      <h2>{bookData.name}</h2>
    </Box>
  );
}

export default SingleBook;
