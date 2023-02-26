import React from 'react';
import { IBook } from '@/repositories/books/booksRepository.param';
import BookItem from './BookItem';
interface IBookListProps {
  books: IBook[];
}

const BookList = ({ books }: IBookListProps) => {
  return (
    <div role="presentation" className="article-preview">
      {books.map((book, index) => (
        <BookItem book={book} key={index} />
      ))}
    </div>
  );
};

export default BookList;
