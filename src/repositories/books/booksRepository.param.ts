export interface getBooksParam {
  query: string;
}

export interface getBookParam {
  slug: any;
}

export interface IBook {
  title: string;
  author: string;
  ISBN: number;
  slug: string;
  created: string;
  updated: string;
}
