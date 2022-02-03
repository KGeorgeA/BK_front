import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font: 1rem Suisse Intl,Helvetica,Arial,sans-serif;
    color: black;
    text-decoration: none;
  }

  .link {
    text-decoration: none;
    color: black;
  }

  .container {
    box-sizing: border-box;
  
    max-width: 1120px;
    width: 100%;
    margin: 10px auto;
    padding: 0 15px;
  }
`;
