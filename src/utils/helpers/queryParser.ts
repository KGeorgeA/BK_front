import queryString from "query-string";
import { IBookFilters, IQueryType } from "../../types/book/book.types";

export const getParsedUrl = (params: IBookFilters) => {
  const { author, genre, priceFilter } = params;
  const url = queryString.stringify(
    {
      author,
      genre: genre && genre.filter((i) => i.length > 0),
      maxPrice: priceFilter.maxPrice,
      minPrice: priceFilter.minPrice,
    },
    { arrayFormat: "comma" }
  );

  return `/?${url}`;
};

export const parseQuery = (query: string): IQueryType => {
  const queryObject = queryString.parse(query, { arrayFormat: "comma" });

  return {
    page: Number(queryObject.page) || 1,
    author: String(queryObject.author),
    genre: queryObject.genre as string[] | null | undefined,
    price: {
      minPrice: Number(queryObject.minPrice),
      maxPrice: Number(queryObject.maxPrice),
    },
  };
};
