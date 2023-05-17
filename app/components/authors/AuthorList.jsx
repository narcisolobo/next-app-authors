import { deleteAuthor } from '@/app/actions/author-actions';
import AuthorRow from './AuthorRow';

async function AuthorList({ authors }) {
  return (
    <table className="table-auto w-full shadow rounded bg-gray-800 mb-4 p-4 overflow-hidden">
      <thead>
        <tr className="text-left text-sm text-gray-200 border-b border-gray-700">
          <th className="p-4 font-semibold">Author</th>
          <th className="p-4 font-semibold">Uploaded By:</th>
          <th className="p-4 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <AuthorRow
            key={author._id}
            author={author}
            deleteAuthor={deleteAuthor}
          />
        ))}
      </tbody>
    </table>
  );
}

export default AuthorList;
