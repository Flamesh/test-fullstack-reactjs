import { useEffect, useState } from 'react';
import { UNIT_PER_PAGE } from '@/constants/units.constants';
import { useGetBooksQuery } from '@/queries/books.query';
import { NavLink } from 'react-router-dom';
import routerMeta from '@/lib/routerMeta';
import BookList from '@/components/books/BookList';

const HomePage = () => {
  const query = `?limit=${UNIT_PER_PAGE}&offset=0`;
  const { data } = useGetBooksQuery(query);

  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <NavLink to={routerMeta.NewBookPage.path}>
              <i className="ion-add-outline"></i> Add a new book
            </NavLink>
          </div>
        </div>
        {data && (
          <div>
            <BookList books={data?.books} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
