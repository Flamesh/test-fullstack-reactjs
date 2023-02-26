import { QUERY_BOOKS_KEY, QUERY_BOOK_KEY } from '@/constants/query.constant';
import { getBook, getBooks, createBook, updateBook, deleteBook } from '@/repositories/books/booksRepository';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

export const useGetBooksQuery = (query: string) => {
  return useQuery({
    queryKey: [QUERY_BOOKS_KEY, query],
    queryFn: () => getBooks({ query }).then((res) => res.data),
    keepPreviousData: true,
  });
};

export const useGetBookQueries = (slug: string) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_BOOK_KEY, slug],
        queryFn: () => getBook({ slug }).then((res) => res.data),
      },
    ],
  });
};

export const useCreateBookMutation = () => useMutation(createBook);
export const useUpdateBookMutation = () => useMutation(updateBook);
export const useDeleteBookMutation = () => useMutation(deleteBook);
