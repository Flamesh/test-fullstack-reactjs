import useInputs from '@/lib/hooks/useInputs';

import { useCreateBookMutation } from '@/queries/books.query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { renderError } from '@/lib/utils/checkError';

const AddNewBookPage = () => {
  const [bookData, onChangeBookData] = useInputs({ title: '', author: '', ISBN: 0 });
  const navigate = useNavigate();
  const createBookMutate = useCreateBookMutation();
  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBookMutate.mutate(
      { ...bookData, ISBN: Number(bookData.ISBN) },
      {
        onSuccess: (data) => {
          toast.success('Create book success');
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
            <h1 className="text-xs-center mb-5">Add a new book</h1>

            <form onSubmit={onCreate}>
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
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBookPage;
