import { IBookFilters } from "../../types/book/book.types";

// export interface ISearchQueryType {}

export interface IQueryType {
  page?: number;
  author?: IBookFilters["author"];
  genre?: IBookFilters["genre"];
  price?: IBookFilters["price"];
}

// export const searchResolver = (query: ISearchQueryType): IQueryType => {
export const searchResolver = (query: string) => {
  console.log("searchResolver function", query);
  // const resolvedQuery: IQueryType = {
  //   page: 1,
  //   author: null,
  //   genre: null,
  //   price: {
  //     minPrice: 0,
  //     maxPrice: 1000,
  //   },
  // };
  // return resolvedQuery;
};
