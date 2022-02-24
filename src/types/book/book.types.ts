export interface IBooksState {
  books: IBook[];
  pageQty?: number;
  filters?: IBookFilters;
  price?: IBooksMinMaxPrice;
}

export interface IBooksMinMaxPrice {
  maxPrice: number;
  minPrice: number;
}

export interface IBookFilters {
  author?: string;
  genre?: string[];
  price?: IBooksMinMaxPrice;
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
}
