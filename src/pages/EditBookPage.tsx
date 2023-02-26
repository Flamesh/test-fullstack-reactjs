import useInputs from '@/lib/hooks/useInputs';

import { useUpdateBookMutation, useGetBookQueries } from '@/queries/books.query';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { renderError } from '@/lib/utils/checkError';
import { useEffect } from 'react';

const UpdateBookPage = () => {
  const slug = useLocation().pathname.split('/')[2];

  const [book] = useGetBookQueries(slug);

  const [bookData, onChangeBookData, setBookData] = useInputs({
    title: book.data.book.title,
    author: book.data.book.author,
    ISBN: book.data.book.ISBN,
  });
  const navigate = useNavigate();

  const updateBookMutation = useUpdateBookMutation();
  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBookMutation.mutate(
      { ...bookData, ISBN: Number(bookData.ISBN), slug },
      {
        onSuccess: (data) => {
          toast.success('Update book success');
          setTimeout(() => {
            navigate('/');
          }, 1000);
        },
        onError: (err) => {
          toast.error(renderError(err));
        },
      },
    );
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center mb-5">Edit a new book</h1>

            <form onSubmit={onUpdate}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={bookData.title}
                  onChange={onChangeBookData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="author"
                  placeholder="Input author"
                  name="author"
                  value={bookData.author}
                  onChange={onChangeBookData}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="number"
                  placeholder="Input ISBN"
                  autoComplete="off"
                  name="ISBN"
                  value={bookData.ISBN}
                  onChange={onChangeBookData}
                />
              </fieldset>
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookPage;
