import { IError } from "../error/error.types";

export interface IBooksState {
  books: IBook[];
  pageQty?: number;
  filters?: IBookFilters;
  price?: IBooksMinMaxPrice;
  error?: IError;
  page?: number;
}

export interface IBooksMinMaxPrice {
  maxPrice: number;
  minPrice: number;
}

export interface IBookFilters {
  author: number | string | null;
  genre: string[] | null;
  priceFilter: IBooksMinMaxPrice;
}

export interface IBook {
  id: number;
  name: string;
  price: number;
  picture: string;
  author?: string;
  publisher?: string;
  description?: string;
  genre?: string[];
  rating?: number;
}

export interface IBookItemProps {
  book: IBook;
}

export interface IGetBookApi {
  page: number;
  size: number;
  query?: IBookFilters;
}

export interface IBooksQuerySearch {
  queryTitle: IGetBookApi;
  books: IBook[];
  pageQty: number;
  price: IBooksMinMaxPrice;
  error?: IError;
  page?: number;
}


export interface IQueryType {
  page: number;
  author?: IBookFilters["author"];
  genre?: IBookFilters["genre"];
  price: IBookFilters["priceFilter"];
}