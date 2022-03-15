export interface ICategoryFilter {
  authors: Array<{
    id: number | string;
    fullname: string;
  }>;
  genres: Array<{
    id: number | string;
    value: string;
    name: string;
  }>;
}