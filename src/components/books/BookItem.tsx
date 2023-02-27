import { IBook } from '@/repositories/books/booksRepository.param';
import convertToDate from '@/lib/utils/convertToDate';
import { NavLink } from 'react-router-dom';
import { useDeleteBookMutation } from '@/queries/books.query';
import { toast } from 'react-toastify';
import { renderError } from '@/lib/utils/checkError';

interface IBookProps {
  book: IBook;
}

const BookItem = ({ book }: IBookProps) => {
  const { title, author, ISBN, created, slug } = book;
  const deleteBookMutation = useDeleteBookMutation();
  const onDelete = () => {
    deleteBookMutation.mutate(
      { slug },
      {
        onSuccess: () => {
          toast.success('Delete book success');
          window.location.reload();
        },
        onError: (err) => {
          toast.error(renderError(err));
        },
      },
    );
  };
  return (
    <div role="presentation" className="">
      <div className="article-meta">
        <p className="title margin-bottom font-bold text-uppercase text-20">{title}</p>
        <div className="row gap-2">
          <div className="col-md-12">
            <span className="font-bold">Author </span>: {author}
          </div>
          <div className="col-md-12">
            {' '}
            <span className="font-bold">ISBN Number</span>: {ISBN}
          </div>
        </div>
        <div className="margin-top">
          <span className="date">{convertToDate(created)}</span>
        </div>
        <div style={{ marginTop: 10 }}>
          <button className="btn btn-outline-primary btn-sm margin-left">
            <NavLink to={'/edit-book/' + slug}>Edit</NavLink>
          </button>
          <button onClick={onDelete} className="btn btn-outline-danger btn-sm" style={{ marginLeft: 10 }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
