import styled from "styled-components";

export const BookSection = styled.section`
  margin-bottom: 20px;
`;

export const BookTitle = styled.div``;

export const BookAuthor = styled.h4`
  color: #a0a0a0;
  font-size: 14px;
`;

export const BookName = styled.h2`
  color: #000;
  font-size: 32px;
`;

export const BookInfo = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookImgDiv = styled.div`
  max-width: 500px;
  min-height: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SingleBookImg = styled.img`
  max-width: 430px;
  min-height: 430px;
  width: 50%;
  height: 50%;
`;

export const BookMainInfo = styled.div`
  width: 600px;
  .book-buyButton {
    color: red;
  }
`;

export const BookDescription = styled.div`
  font-size: 17px;
  color: #000;
  line-height: 150%;
  width: 600px;
  text-align: justify;
`;

export const BookPrice = styled.div``;

export const BookRating = styled.div``;

export const BookUserRate = styled.div``;
