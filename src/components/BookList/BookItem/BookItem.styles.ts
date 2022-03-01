import styled from "styled-components";

const BookItemDiv = styled.div`
  box-sizing: border-box;
  width: 25%;
  max-height: 300px;
  height: 100%;

  margin: 0 0 48px;

  .book__link-container {
    margin-bottom: 10px;
  }

  .book__author-link {
    color: #A0A0A0;

    transition: all .2s linear;
    &:hover {
      color: black;
    }
  }

  .book__title-link {
    font-weight: 700;
  }

  .book__price {
    color: #46c3d2;
  }
`;

export default BookItemDiv;