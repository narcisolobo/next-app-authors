import { getUser } from '@/app/utils/get-user';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

async function AuthorRow({ author, deleteAuthor }) {
  const user = await getUser();

  return (
    <tr>
      <td className="p-4 border-b border-gray-800 text-sm bg-gray-700 text-gray-400">
        {author.name}
      </td>
      <td className="p-4 border-b border-gray-800 text-sm bg-gray-700 text-gray-400">
        {author.creator.email ?? ''}
      </td>
      <td className="p-4 border-b border-gray-800 text-sm bg-gray-700 text-gray-400">
        {author.creator._id === user._id && (
          <div className="flex items-center gap-2">
            <Link
              href={`/authors/${author._id}/edit`}
              className="hover:text-yellow-400">
              Edit
            </Link>
            <DeleteButton authorId={author._id} deleteAuthor={deleteAuthor} />
          </div>
        )}
      </td>
    </tr>
  );
}

export default AuthorRow;
