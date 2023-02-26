import apiClient from '@/repositories/apiClient';
import { getBookParam, getBooksParam, IBook } from './booksRepository.param';

export const getBooks = async ({ query }: getBooksParam) => {
  return await apiClient({
    method: 'get',
    url: `/books${query}`,
  });
};

export const getBook = async ({ slug }: getBookParam) => {
  return await apiClient({
    method: 'get',
    url: `/books/${slug}`,
  });
};

export const createBook = async ({ title, author, ISBN }: IBook) => {
  return await apiClient({
    method: 'post',
    url: `/books`,
    data: {
      title,
      author,
      ISBN,
    },
  });
};

export const updateBook = async ({ title, author, ISBN, slug }: IBook) => {
  return await apiClient({
    method: 'put',
    url: `/books/` + slug,
    data: {
      title,
      author,
      ISBN,
    },
  });
};

export const deleteBook = async ({ slug }: getBookParam) => {
  return await apiClient({
    method: 'delete',
    url: `/books/` + slug,
  });
};
