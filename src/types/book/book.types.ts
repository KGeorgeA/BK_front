import { IError } from "../error/error.types";

export interface IBooksState {
  books: IBook[];
  pageQty?: number;
  filters?: IBookFilters;
  price?: IBooksMinMaxPrice;
  error?: IError;
}

export interface IBooksMinMaxPrice {
  maxPrice: number;
  minPrice: number;
}

export interface IBookFilters {
  // author?: string | null;
  author?: number | string | null;
  // genre?: number[] | null;
  genre?: Array<number|string> | null;
  price?: IBooksMinMaxPrice | null;
}

export interface IBook {
  id: number;
  name: string;
  price: number;
  picture: string;
  author?: string;
  publisher?: string;
  description?: string;
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
}
