export interface ICategoryFilter {
  authors: Array<{
    id: number | string;
    fullname: string;
  }>;
  // genres: object[];
  genres: Array<{
    id: number | string;
    value: string;
    name: string;
  }>;
}
